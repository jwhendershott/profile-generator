const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var memArr = [];

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
        while(memArr.length == 0 || memArr [memArr.length - 1].type !== 'I am done adding members.' ) {
            memArr.push(await addToTeam());
        }
        memArr.pop();
        memArr.push(new Manager(manager.mangName, manager.empID, manager.officeNo, manager.mangEmail));
        return {memArr}

    });
    console.log(test);

    fs.writeFile(outputPath, render(memArr), (err) =>
    err ? console.error(err) : console.log("Got it, bro")
    );
}

managerPrompts();

async function addToTeam () {
    var teamMember
    return await inquirer.prompt([
    {   
        type: 'list',
        name: 'memberChoice',
        message: 'Who would you like to add to your team?',
        choices: ['Engineer', 'Intern', 'I am done adding members.'],
    }
    ])

    .then(async function (data) {
        console.log(data);
        switch (data.memberChoice){
            case 'Engineer':
                var engBro = await engineerPrompts();
                teamMember = new Engineer(engBro.engName, engBro.engEmpID, engBro.engEmail, engBro.engGithub )
                break;
            case 'Intern': 
            var internBro = await internPrompts();
            teamMember = new Intern(internBro.internName, 
                internBro.internEmpID,
                internBro.internEmail,
                internBro.school)
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
                name: 'internEmail',
                message: 'What is your email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do you go to?',
            },
        ])

    .then (data => {
        return data;
    });
}