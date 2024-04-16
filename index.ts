#!/usr/bin/env node 

import inquirer from "inquirer"

const currency_Rates:{[Key:string]:number}={
    PKR:278.12,
    IND:83.66,
    GBP:0.80,
    EURO:0.94,
    USD:1
}
let answer=await inquirer.prompt([{
    message:"Select Currency You Want From convert",
    type:"list",
    name:"From",
    choices:["PKR","IND","GBP","EURO","USD"]},
    
    { message:"Select Currency You Want To convert",
      type:"list",
      name:"To",
      choices:["PKR","IND","GBP","EURO","USD"]

    },
    {message:"Enter The Amount",
    type:"number",
    name:"enteramount",
     }
])
let amount=currency_Rates[answer.To]/currency_Rates[answer.From]*answer.enteramount
console.log(amount)