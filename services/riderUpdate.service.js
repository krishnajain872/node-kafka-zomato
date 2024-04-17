const { faker } = require("@faker-js/faker");
const locationsInIndia = [
  "maharashtra",
  "delhi",
  "karnataka",
  "telangana",
  "gujarat",
  "tamilnadu",
  "westbengal",
  "rajasthan",
];

function generateRiderLocationUpdates() {
  const riderId = faker.string.uuid();
  const latitude = faker.location.latitude();
  const longitude = faker.location.longitude();
  const location =
    locationsInIndia[Math.floor(Math.random() * locationsInIndia.length)];

  const update = `Rider is at latitude: ${latitude}, longitude: ${longitude}`;

  return {
    riderId,
    update,
    location,
  };
}

module.exports = generateRiderLocationUpdates;
