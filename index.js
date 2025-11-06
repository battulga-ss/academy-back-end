import fs from "node:fs/promises";

const userRawData = await fs.readFile("users.json", "utf8");

const users = new Array(JSON.parse(userRawData));

const username = "Bat";
const password = "123";

// for (let i = 0; i < users.length; i++) {
//   if (users[i].name === username && users[i].password === password) {
//     user = users[i];
//     userIndex = i;
//   }
// }

const user = users.find(value => {
  return value.name === username && value.password === password;
});

if (user) {
  console.log("ner eswel nuuts ug buruu bn!");
  process.exit();
}




const historyRawData = await fs.readFile("history.json", "utf8");

const history = JSON.parse(historyRawData);

if (!history[user.name]) {
  history[user.name] = [];
}

history[user.name].push({ amount: 1000, action: "deposit" });

const historyString = JSON.stringify(history);

fs.writeFile("history.json", historyString)
  .then(() => {
    console.log("Amjilttai bayrtai!");
    process.exit();
  })
  .catch(e => {
    console.log(e);
    console.log("aldaa garlaa");
  });