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

  flights.forEach((flight, index) => {
    const flightItem = document.createElement("div");
    flightItem.classList.add("flight-item");
    flightItem.innerHTML = `
      <h3>Flight ${index + 1}</h3>
      <p><strong>Origin:</strong> ${flight.origin}</p>
      <p><strong>Destination:</strong> ${flight.destination}</p>
      <p><strong>Departure Date:</strong> ${flight.departureDate}</p>
      <p><strong>Airline:</strong> ${flight.airline}</p>
      <p><strong>Price:</strong> $${flight.price}</p>
      <p><strong>Seats Available:</strong> ${flight.seatsAvailable}</p>
      <button class="book-btn" data-flight-index="${index}">Book Now</button>
    `;
    flightsList.appendChild(flightItem);
  });
}

// Function to filter flights based on search criteria
function filterFlights(origin, destination, departureDate) {
  // Simulate filtering based on the sample data
  const filteredFlights = flightsData.filter(
    (flight) =>
      flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
      flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
      flight.departureDate === departureDate
  );
  return filteredFlights;
}
