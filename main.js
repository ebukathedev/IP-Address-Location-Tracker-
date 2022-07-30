// User endpoint -https://api.ipregistry.co/?key=YOUR_API_KEY or http://ipwho.is/
// User input endpoint - https://api.ipregistry.co/66.165.2.7?key=YOUR_API_KEY or http://ipwho.is/[IP address]

// API_KEY - 7hnlideejegux5su

// url to fetch data from
const url = "http://ipwho.is/";
let userIP;

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


// Remove the skeleton class
const removeSkeletons = () => {
	skeletons.forEach((skeleton) => {
		skeleton.classList.remove("skeleton", "skeleton-text");
	});

	console.log("yoooo");
};

// Fill in the values gotten from the API
const fillInValues = (
	ipValue,
	ipTypeValue,
	continentValue,
	countryValue,
	capitalValue,
	regionValue,
	cityValue,
	ispValue
) => {
	ip.innerText = ipValue;
	ipType.innerText = ipTypeValue;
	continent.innerText = continentValue;
	country.innerText = countryValue;
	capital.innerText = capitalValue;
	region.innerText = regionValue;
	city.innerText = cityValue;
	isp.innerText = ispValue;
};

// console.log(ip, ipType, continent, country, capital, region, city, isp);

// window.onload = () => {
window.addEventListener("DOMContentLoaded", () => {
	fetch("free.json")
		.then((res) => res.json())
		.then((data) => {
				
			// Delay the values from displaying in order for the loading animation to show
			setTimeout(() => {
				fillInValues(
					data.ip,
					data.type,
					data.continent,
					data.country,
					data.capital,
					data.region,
					data.city,
					data.connection.isp
				);
				removeSkeletons();
			}, 2000)
			localStorage.setItem("userIP", data.ip);
		});
})

userIP = localStorage.getItem("userIP");

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const input = document.querySelector("#input");
// 	let inputValue = document.querySelector("#input").value;
// 	console.log(inputValue);

// 	let urlForIPAddressEntered = url + inputValue;
// 	console.log(urlForIPAddressEntered);

// 	if (userIP !== inputValue) {
// 		details.innerText = "Details for the IP entered";
// 	} else details.innerText = "Details for your IP";

// 	// let arr = Array(9).fill();
// 	// fillInValues(...arr);
// 	// removeSKeletons();

// 	fetch(urlForIPAddressEntered)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 			removeSKeletons();
// 			setTimeout(function () {
// 				fillInValues(
// 					data.ip,
// 					data.type,
// 					data.continent,
// 					data.country,
// 					data.capital,
// 					data.region,
// 					data.city,
// 					data.connection.isp
// 				);
// 			});
// 		})
// 		.catch((error) => {
// 			console.log(inputValue + "is a private IP address");
// 			errorMsg.innerText = `"${inputValue} is either not valid or it is a private IP address, try a different address :)`;
// 			errorMsg.classList.add("disappear");
// 			errorMsg.innerText = "";
// 			errorMsg.classList.remove("disappear");
// 		});

// 	input.value = "";
// });
