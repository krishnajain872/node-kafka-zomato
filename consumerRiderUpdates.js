const kafka = require("./client");
const group = "rider_update";

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topic: "rider-updates", fromBeginning: true });

  await consumer.run({
    partitionsConsumedConcurrently: 2,
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        `\n${group}: [${topic}]: PART:${partition} offset: ${message.offset}, :\n`,
        "\n",
        message.value.toString(),
        "\n"
      );
    },
  });
}

init();
