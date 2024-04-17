const kafka = require("./client");
const foodUpdate = require("./services/foodUpdate.service");
const riderUpdate = require("./services/riderUpdate.service");

function getLocationPartition(location) {
  const States = {
    maharashtra: 0,
    delhi: 1,
  };

  return States[location] !== undefined ? States[location] : 0;
}

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  setInterval(async () => {
    const data = await foodUpdate();
    console.log(data);
    await producer.send({
      topic: "food-updates",
      messages: [
        {
          key: "order-update",
          value: JSON.stringify(data),
        },
      ],
    });
  }, 3000);

  setInterval(async () => {
    const data = await riderUpdate();
    const partition = getLocationPartition(String(data.location.toLowerCase()));
    console.log({
      topic: "rider-updates",
      messages: [
        {
          partition,
          key: "rider-location",
          value: JSON.stringify(data),
        },
      ],
    });
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          partition,
          key: "rider-location",
          value: JSON.stringify(data),
        },
      ],
    });
  }, 1000);
}

init();
