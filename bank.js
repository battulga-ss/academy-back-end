import inquirer from "inquirer";
import fs from "node:fs/promises";

export const bankAnswer = async (users, user) => {
  const { bankOption } = await inquirer.prompt([
    {
      type: "select",
      name: "bankOption",
      message: "Login Or Signup",
      choices: [
        { name: "Deposit", value: "deposit" },
        { name: "Withdraw", value: "withdraw" },
        { name: "History all", value: "history-all" },
        { name: "History deposit", value: "history-deposit" },
        { name: "History withdraw", value: "history-deposit" },
        { name: "Check balance", value: "check-balance" },
        { name: "Transaction", value: "transaction" },
        { name: "Exit", value: "exit" }
      ]
    }
  ]);

  switch (bankOption) {
    case "deposit":
      await deposit(users, user);
      break;
      case "withdraw":
          console.log("withdraw")
          await withdraw(users, user); 
      break;
    case "history-all":
          console.log("history-all");
          await showHistory(users, user )
          break;
      
      case "History-deposit":
          console.log("history-deposit");
          await historyDeposit(user, users);
          break;
      
      case "History-withdraw":
          console.log("history-withdraw");
          await historyWithdraw(user, users);
          break;

    case "check-balance":
          console.log(user.balance,"uldegdel");
        
          break;
      case "transaction":
          console.log("transaction")
          await transaction( users);
          break;
      
    case "exit":
      process.exit();
  }
};

const updateUser = async (users, user, amount, type) => {
  const userData = JSON.stringify(users);

  await fs.writeFile("users.json", userData, "utf-8");

  const historyRawData = await fs.readFile("history.json", "utf-8");
  const history = JSON.parse(historyRawData);

  const userHistories = history[user.username] || [];

  userHistories.push({
    type,
    amount,
    balance: user.balance,
    currentBalance: user.balance
  });

  history[user.username] = userHistories;

  const historyData = JSON.stringify(history);

  await fs.writeFile("history.json", historyData, "utf-8");
  console.log("Amjilttai");

  return;
};

const deposit = async (users, user) => {
  let balance = parseInt(user.balance) || 0;

  const { amount } = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: "Hediin orlogo hiih we?"
    }
  ]);

  balance = balance + amount;

  user.balance = balance;

    return await updateUser(users, user, amount, "deposit");
    




};

const withdraw = async (users, user) => {
  const { amount } = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: "hediin zarlaga awah we ?",
      
    }
  ]);

  if (amount > user.balance) {
    console.log("uldegdel hurehgui bna !");
    return withdraw;
  }

    user.balance -= amount;
    console.log(user,'user')
    await updateUser(users, user, amount, "withdraw");
};

const showHistory = async (user, users, currentBalance) => {
  const historyRawData = await fs.readFile("history.json", "utf-8");
  const history = JSON.parse(historyRawData);

    console.log(history)

    
    

};

const transaction = async (users) => {
    const { rec, amount } = await inquirer.prompt([
        {
            type: "input",
            name: "rec",
            message: "henruu ywuulah we "
        },
        {
            type: "number",
            name: "amount",
            message: "hediig ywuulah we :",
        }
    ]);

 
            
    const result = users.filter((e) =>
        e.username == rec
    
    );
    
    if (result.length == 0) {
        console.log("user not found")
    }

    let balance = parseInt(result.balance) || 0;

    result.balance -= amount;
    rec.balance += amount;
      


    return await updateUser(users, result, amount, "transaction");


}










