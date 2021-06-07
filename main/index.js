const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./src/html");
const teamMembers = [];

function createManager() {
  console.log("build your team");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerId",
        message: "Please input employee ID number",
      },
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "list",
        name: "officeNumber",
        message: "please select the office number",
        choices: ["1", "2", "3"],
      },
    ])
    .then(answers => {
      console.log("success");
      const manager = new Manager(
        answers.managerId,
        answers.managerName,
        answers.managerEmail,
        answers.officeNumber
      );
      teamMembers.push(manager);
      console.log(teamMembers);
      createTeam();
    });
  function createTeam() {
    console.log(teamMembers);
    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeType",
          message: "Please select employee type to add or end team building",
          choices: ["engineer", "intern", "exit"],
        },
      ])
      .then(answer => {
        console.log(answer.employeeType);
        if (answer.employeeType == "engineer") {
          addEngineer();
        } else if (answer.employeeType == "intern") {
          addIntern();
        }
      });
  }
  function addEngineer() {
    console.log("we are adding an engineer");
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerId",
          message: "Please input employee ID number",
        },
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "what is the Engineers Github profile",
        },
      ])
      .then(answer => {
        const engineer = new Engineer(
          answer.engineerId,
          answer.engineerName,
          answer.engineerEmail,
          answer.gitHub
        );
        teamMembers.push(engineer);
        console.log(teamMembers);
        createTeam();
      });
  }
  function addIntern() {
    console.log("we are adding an intern");
    inquirer
      .prompt([
        {
          type: "input",
          name: "internId",
          message: "Please input employee ID number",
        },
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
        },
        {
          type: "input",
          name: "school",
          message: "what school is the intern attending",
        },
      ])
      .then(answer => {
        const intern = new Intern(
          answer.internId,
          answer.internName,
          answer.internEmail,
          answer.school
        );
        teamMembers.push(intern);
        console.log(teamMembers);
        createTeam();
      });
  }
}
createManager();
