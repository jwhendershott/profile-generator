const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function managerPromts() {
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'mangName',
            message: "What is your manager's name?",
        },
        {
            type: 'input',
            name: 'empID',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'officeNo',
            message: 'What is your office phone number?',
        },
        {
            type: 'input',
            name: 'mangEmail',
            message: 'What is your email address?'
        }
    ]);
}

function addTeam () {
    inquirer.prompt([
        
    ])
}