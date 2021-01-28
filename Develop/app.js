const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function managerPrompts() {
var test = await inquirer
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

    .then(async function (manager) {
        var memArr = [];
        while(memArr.length == 0 || memArr [memArr.length - 1].type !== 'I am done adding members.' ) {
            memArr.push(await addToTeam());
        }
        memArr.pop();
        return {manager: manager, members: memArr}

        
    });
    console.log(test);
}

managerPrompts();

async function addToTeam () {
    var teamMember
    return await inquirer.prompt([
    {
        type: 'list',
        name: 'memberChoice',
        message: 'Who would you like to add to your team?',
        choices: ['engineer', 'intern', 'I am done adding members.'],
    }
    ])

    .then(async function (data) {
        console.log(data);
        switch (data.memberChoice){
            case 'engineer':
                var engBro = await engineerPrompts();
                teamMember = {type: 'engineer', 
                name: engBro.engName, 
                id: engBro.engEmpID,
                email: engBro.engEmail,
                github: engBro.engGithub}
                break;
            case 'intern': 
            var internBro = await internPrompts();
            teamMember = {type: 'intern',
            name: internBro.internName,
            id: internBro.internEmpID,
            email: internBro.school,
            github: internBro.internGithub}
                break;
            case 'I am done adding members.':
                teamMember = {type: 'I am done adding members.'}
                break;
            
        }  
    return teamMember;
    });
}

async function engineerPrompts() {
    return await inquirer
        .prompt ([
            {
                type: 'input',
                name: 'engName',
                message: "What is your name?",
            },
            {
                type: 'input',
                name: 'engEmpID',
                message: 'What is your employee ID?',
            },
            {
                type: 'input',
                name: 'engEmail',
                message: 'What is your email address?',
            },
            {
                type: 'input',
                name: 'engGithub',
                message: 'What is your GitHub username?',
            },
        ])

    .then (data => {
        return data;
    });
}

async function internPrompts() {
    return await inquirer
        .prompt ([
            {
                type: 'input',
                name: 'internName',
                message: "What is your name?",
            },
            {
                type: 'input',
                name: 'internEmpID',
                message: 'What is your employee ID?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do you go to?',
            },
            {
                type: 'input',
                name: 'internGithub',
                message: 'What is your GitHub username?',
            },
        ])

    .then (data => {
        return data;
    });
}

