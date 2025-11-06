import fs from "node:fs/promises";
import inquirer from "inquirer";

const { username, password,action,amount } = await inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "Neree oruulna uu"
  },
  {
    type:"input",
    name: "password",
    message: "password oruulna uu"
  },
  {
    type: "select",
    name: "action",
    choices: ["Deposit", "Withdraw"],
    message: "Ymar uildel hiih we"
  },
   {
    type: "input",
    name: "amount",
    message: "amount"
  }
]);

const userRawData = await fs.readFile("users.json", "utf8");

const users = JSON.parse(userRawData);

const user = users.find(value => {
  return value.name == username && value.password == password;
});

if (!user) {
  console.log("ner eswel nuuts ug buruu bn!");

  process.exit();
}

console.log(action,'action')




let historyRawData;
try {
  historyRawData = await fs.readFile("history.json", "utf8");
} catch (err) {
  
  historyRawData = '{}';
}

let history;
try {
  if (historyRawData.trim() === '') {
    history = {};
  } else {
    history = JSON.parse(historyRawData);
  }
} catch (e) {
  console.error("Invalid JSON in history.json:", e);
  history = {};
}

console.log(history, 'history');

if (!history[user.name]) {
  history[user.name] = [];
}

console.log('1');

history[user.name].push({ amount: parseInt(amount), action: action });

console.log('2');

const historyString = JSON.stringify(history);

console.log('3');

await fs.writeFile("history.json", historyString);
console.log("Amjilttai bayrtai!");
process.exit();
