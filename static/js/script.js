// script.js
const searchForm = document.querySelector(".search-form");
const resultsSection = document.getElementById("resultsSection");

// Sample flight data (Replace this with data fetched from API)
const flightsData = [
  {
    origin: "New York",
    destination: "Los Angeles",
    departureDate: "2023-08-15",
    airline: "Delta Airlines",
    price: 300,
    seatsAvailable: 150,
  },
  {
    origin: "Chicago",
    destination: "San Francisco",
    departureDate: "2023-08-20",
    airline: "United Airlines",
    price: 280,
    seatsAvailable: 120,
  }
];

// Function to display the flight results
function displayFlights(flights) {
  const flightsList = document.getElementById("flightsList");
  flightsList.innerHTML = "";


}

