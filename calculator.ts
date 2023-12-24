import inquirer from 'inquirer';


let answer = await inquirer.prompt([{
    type: 'number',
    name: 'num1',
    message: 'Enter the first number:',
},
{
    type: 'number',
    name: 'num2',
    message: 'Enter the second number:',
},
{
    type: 'list',
    name: 'operator',
    choices: ["Add","Subtract","Multiply","Divide"]
}
])

let result:number
switch (answer.operator){
    case "add":
    result = answer.num1+answer.num2
    console.log(result)
    break;
    case "Subtract":
    result = answer.num1-answer.num2
    console.log(result)
    break;
    case "Multiply":
    result = answer.num1*answer.num2
    console.log(result)
    break;
    case "Divide":
    result = answer.num1answer.num2
    console.log(result)
    break;
}