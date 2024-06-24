#! /usr/bin/env node
import inquirer from "inquirer";
// Printing a Wellcome Message
console.log("\n\tWellcome To \'codeWithRehan\' - CLI Simple Calaculator\n");
// Asking Question from Users through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one Operator to Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statements If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid Input");
}
