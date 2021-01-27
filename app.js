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
            message: 'What is your email address?',
        },
    ])

    .then(function (data) {
        addToTeam()
    })
}

managerPromts();

function addToTeam () {
    inquirer.prompt([
    {
        type: 'list',
        name: 'memberChoice',
        message: 'Who would you like to add to your team?',
        choices: ['engineer', 'intern', 'I am done adding members.'],
    }
    ])
}