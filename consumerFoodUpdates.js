const kafka = require("./client");
const group = "food_update";

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topics: ["food-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `\n${group}: [${topic}]: PART:${partition}:\n`,
        "\n",
        message.value.toString(),
        "\n"
      );
    },
  });
}

init();
