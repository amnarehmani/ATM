#! /usr/bin/env node

import inquirer from "inquirer";

let MyBalance = 60000;
let myPin = 2323;

let pinAnswer = await inquirer.prompt([
  {
    name: "Pin",
    message: "Enter You Pin",
    type: "number",
  },
]);

if (pinAnswer.Pin === myPin) {
  console.log("correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select an option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

  
    if (MyBalance <= amountAns.amount)
   console.log ("you don't have enough amount to withdraw")

   if (MyBalance -= amountAns.amount ){
    console.log ("your current balance :" + MyBalance)
   }
  }



else if ( operationAns.operation === "check balance"){
  console.log("your balance is:" + MyBalance)
}

} else {
  console.log("incorrect pin code");
}
