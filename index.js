// Get elements from the DOM
const form = document.querySelector("form"),
  ip = document.querySelector("#ip"),
  ipType = document.querySelector("#ip-type"),
  continent = document.querySelector("#continent"),
  country = document.querySelector("#country"),
  flag = document.querySelector("#flag"),
  capital = document.querySelector("#capital"),
  region = document.querySelector("#region"),
  city = document.querySelector("#city"),
  isp = document.querySelector("#isp"),
  skeletons = document.querySelectorAll(".value"),
  details = document.querySelector("#details"),
  errorMsg = document.querySelector("#error-msg"),
  linkToMap = document.querySelector('.map-link a')

// elements to display data from API
const elements = [
	ip,
	ipType,
	continent,
	country,
	flag,
	capital,
	region,
	city,
	isp,
];

// url to fetch data from
const url = "https://ipwho.is/";

// Indicates whether the IP address entered in th form is the user IP
let isUserIP;

// Indicates whether user IP address has changed
let newUserIP;

// Latitude and Longitude
let latitude, longitude;
// Display data from API
const fillInValues = (...values) => {
  elements.forEach((el, index) => {
    if (el.id === "flag") {
      let img = document.createElement("img");
      img.setAttribute("src", values[index]);
      el.appendChild(img);
    } else {
      el.textContent = values[index];
    }
  });
};

const toggleSKeletons = () => {
  skeletons.forEach((skeleton) => {
    skeleton.classList.toggle("skeleton");
    skeleton.classList.toggle("skeleton-text");
  });
};

const loadThenDisplay = (data) => {
  //toggleSKeletons()
  setTimeout(() => {
    toggleSKeletons();
    fillInValues(
      data.ip,
      data.type,
      data.continent,
      data.country,
      data.flag.img,
      data.capital,
      data.region,
      data.city,
      data.connection.isp
    );
  }, 2000);
};

// Show information about the IP address of whoever is currently on the site when the page;is refreshed
window.addEventListener("load", () => {
  // fetch data
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      latitude = parseFloat(data.latitude);
      longitude = parseFloat(data.longitude);
      let position = [latitude, longitude];
      getPosition(position)

      // Delay the values from displaying in order for the loading animation to show
      loadThenDisplay(data);

      if (!localStorage.getItem("isUserIP")) {
        localStorage.setItem("isUserIP", data.ip);
      }

      newUserIP = data.ip;
    })
    .catch(error => {
      errorMsg.classList.add('show')
      setTimeout(() => {
        errorMsg.classList.remove('show')
      }, 3000)
    });
});

isUserIP = localStorage.getItem("isUserIP");

// If a fetch request is made and the IP of the user is changed then we want to update this variable and the local storage
if (newUserIP !== isUserIP) {
  isUserIP = newUserIP;
  localStorage.setItem("isUserIP", newUserIP);
}

// Show information about the IP address of whatever IP is entered in the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input element and its value
  const input = document.querySelector("#input");
  let inputValue = document.querySelector("#input").value;

  // fetch url for IP address entered in the form
  let urlForIPAddressEntered = url + inputValue;

  // Change details title
  if (isUserIP === inputValue) {
    details.textContent = "Details for your IP";
  } else { details.textContent = "Details for the IP entered" }

  // fetch data
  fetch(urlForIPAddressEntered)
    .then((res) => res.json())
    .then((data) => {
      latitude = parseFloat(data.latitude);
      longitude = parseFloat(data.longitude);
      let position = [latitude, longitude];
      getPosition(position)
      elements.forEach((el) => (el.textContent = ""));
      toggleSKeletons();
      loadThenDisplay(data);
    })
    .catch(error => {
      errorMsg.classList.add('show')
      setTimeout(() => {
        errorMsg.classList.remove('show')
      }, 5000)
    });

  input.value = "";
  input.blur()
});

// Map
const map = L.map('map')
const myAPIKey = "1b134299d0c8440da0bc888b2e040584"
const baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${myAPIKey}`;
const isRetina = L.Browser.retina;
const retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${myAPIKey}`;
let marker, link;

function getPosition(position) {
    map.setView(position, 10);
  L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
    apiKey: myAPIKey,
    maxZoom: 20,
    id: 'osm-bright'
  }).addTo(map);
  marker = L.marker(position).addTo(map);
  
  link = `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`
  linkToMap.setAttribute('href', link)
}