import fs from "fs";


const historyRawData = await fs.readFile("history.json", "utf8");

const history = JSON.parse(historyRawData);

if (!history[user.name]) {
  history[user.name] = [];
}

history[user.name].push({ amount: 1000, action: "deposit" });

const historyString = JSON.stringify(history);

fs.writeFile("history.json", historyString)
  .then(() => {
    console.log("Amjilttai!");
    process.exit();
  })
  .catch((e) => {
    console.log(e);
    console.log("aldaa garlaa");
  });
