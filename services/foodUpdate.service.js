const { faker } = require("@faker-js/faker");

function generateFoodUpdates() {
  // Define the updates
  const updates = ["Meal is preparing", "Order has been taken"];
  const indianDishes = [
    "Biryani",
    "Paneer Tikka",
    "Butter Chicken",
    "Chole Bhature",
    "Samosa",
    "Palak Paneer",
    "Tandoori Chicken",
    "Dal Makhani",
    "Rogan Josh",
    "Aloo Gobi",
    "Pani Puri",
    "Chicken Tikka Masala",
    "Gulab Jamun",
    "Masala Dosa",
    "Fish Curry",
    "Vada Pav",
    "Rasgulla",
    "Pav Bhaji",
    "Idli Sambar",
    "Mutton Curry",
    "Aloo Paratha",
    "Pakora",
    "Chicken Biryani",
    "Jalebi",
    "Shahi Paneer",
    "Baingan Bharta",
    "Kofta",
    "Dhokla",
    "Kheer",
  ];

  // Generate fake data
  const orderId = faker.string.uuid();
  const riderId = faker.string.uuid();
  const restaurantId = faker.string.uuid();
  const foodItemName =
    indianDishes[Math.floor(Math.random() * indianDishes.length)];
  const update = updates[Math.floor(Math.random() * updates.length)];

  return {
    orderId,
    riderId,
    restaurantId,
    foodItemName,
    update,
  };
}

module.exports = generateFoodUpdates;
