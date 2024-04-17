const kafka = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  await admin.connect();
  console.log("Admin Connection Success...");

  console.log("Creating Topics [rider-updates, food-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "food-updates",
      },
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  const topics = await admin.listTopics();
  console.log("topics created", topics);
  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();
