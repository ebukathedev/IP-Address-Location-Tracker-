// User endpoint -https://api.ipregistry.co/?key=YOUR_API_KEY or http://ipwho.is/
// User input endpoint - https://api.ipregistry.co/66.165.2.7?key=YOUR_API_KEY or http://ipwho.is/[IP address]

// API_KEY - 7hnlideejegux5su

const url = "http://ipwho.is/";

// Get elements from the DOM
const form = document.querySelector("form");
const ip = document.querySelector("#ip");
const ipType = document.querySelector("#ip-type");
const continent = document.querySelector("#continent");
const country = document.querySelector("#country");
const capital = document.querySelector("#capital");
const region = document.querySelector("#region");
const city = document.querySelector("#city");
const isp = document.querySelector("#isp");
const skeletons = document.querySelectorAll(".value");
const details = document.querySelector("#details");
const errorMsg = document.querySelector("#error-msg");
let userIP;

// Remove the skeleton class
const removeSKeletons = () => {
	skeletons.forEach((skeleton) => {
		skeleton.classList.toggle("skeleton", "skeleton-text");
	});
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
fetch(url)
	.then((res) => res.json())
	.then((data) => {
		setTimeout(function () {
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
		}, 2000);
		removeSKeletons();
		localStorage.setItem("userIP", data.ip);
		console.log(data);
	});

userIP = localStorage.getItem("userIP");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const input = document.querySelector("#input");
	let inputValue = document.querySelector("#input").value;
	console.log(inputValue);

	let urlForIPAddressEntered = url + inputValue;
	console.log(urlForIPAddressEntered);

	if (userIP !== inputValue) {
		details.innerText = "Details for the IP entered";
	} else details.innerText = "Details for your IP";
	// let arr = Array(9).fill("up");
	// fillInValues(...arr);
	// removeSKeletons();

	// fetch(urlForIPAddressEntered)
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data);
	// 		removeSKeletons();
	// 		setTimeout(function () {
	// 			fillInValues(
	// 				data.ip,
	// 				data.type,
	// 				data.continent,
	// 				data.country,
	// 				data.capital,
	// 				data.region,
	// 				data.city,
	// 				data.connection.isp
	// 			);
	// 		});
	// 	})
	// 	.catch((error) => {
	// 		console.log(inputValue + "is a private IP address");
	// 		errorMsg.innerText = `"${inputValue} is either not valid or it is a private IP address, try a different address :)`;
	// 		errorMsg.classList.add("disappear");
	// 		errorMsg.innerText = "";
	// 		errorMsg.classList.remove("disappear");
	// 	});

	input.value = "";
});
