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

const fillInValues = (...values) => {
	console.log(values);
};


fillInValues(1, 2, 3, 4, 5, 6, 7, 8)