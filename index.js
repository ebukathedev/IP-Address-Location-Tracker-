// Get elements from the DOM
const form = document.querySelector("form"),
  ip = document.querySelector("#ip"),
  ipType = document.querySelector("#ip-type"),
  continent = document.querySelector("#continent"),
  country = document.querySelector("#country"),
  capital = document.querySelector("#capital"),
  region = document.querySelector("#region"),
  city = document.querySelector("#city"),
  isp = document.querySelector("#isp"),
  skeletons = document.querySelectorAll(".value"),
  details = document.querySelector("#details"),
  errorMsg = document.querySelector("#error-msg");

// elements to display data from API
const elements = [ip, ipType, continent, country, capital, region, city, isp];

// url to fetch data from
const url = "http://ipwho.is/";

// Indicates wether the IP address entered in th form is the user IP
let isUserIP;

// Display data from API 
const fillInValues = (...values) => {
  elements.forEach((el, index) => {
    el.textContent = values[index]
  })
};

const toggleSKeletons = () => {
  skeletons.forEach(skeleton => {
    skeleton.classList.toggle("skeleton")
    skeleton.classList.toggle("skeleton-text")
  })
}

const yoo = (examp) => {
  console.log(examp);
}

const loadThenDisplay = (data) => {
  //toggleSKeletons()
  setTimeout(() => {
    toggleSKeletons()
    fillInValues(
      data.ip,
      data.type,
      data.continent,
      data.country,
      data.capital,
      data.region,
      data.city,
      data.connection.isp
    )
  }, 2000)
}


// Show information about the IP address of whoever is currently on the site when the page;is refreshed
window.addEventListener("DOMContentLoaded", () => {

  // fetch data
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      // Delay the values from displaying in order for the loading animation to show
      loadThenDisplay(data)

      if (!localStorage.getItem('isUserIP')) {
        localStorage.setItem("isUserIP", data.ip);
      }
    });
})

isUserIP = localStorage.getItem('isUserIP');

// Show information about the IP address of whatever IP is entered in the form 

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get input element and its value
  const input = document.querySelector("#input");
  let inputValue = document.querySelector("#input").value;

  // fetch url for IP address enteted in the form
  let urlForIPAddressEntered = url + inputValue;

  // Change details title
  if (isUserIP !== inputValue) {
    details.innerText = "Details for the IP entered";
  } else details.innerText = "Details for your IP";

  // fetch data
  fetch(urlForIPAddressEntered)
    .then((res) => res.json())
    .then((data) => {
      elements.forEach(el => el.textContent = "")
      toggleSKeletons()
      loadThenDisplay(data)
    })
  

  input.value = "";
});