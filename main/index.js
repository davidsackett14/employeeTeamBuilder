const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { generateHTML, generateCard } = require ("./src/html");

const render = require("./src/html");
const teamMembers = [];


function createManager() {
  console.log("build your team");
  inquirer
    .prompt([
      {
        type: "number",
        name: "managerId",
        validate:   function   (idnumber)   {
          if   (idnumber == NaN)   {
            
            
            return false;
         
          }
          return true
        },
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

        validate: function (managerEmail) {
          // Regex mail check (return true if valid mail)
          return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            managerEmail
          );
        },
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
        } else if (answer.employeeType == "exit") {
          saveAndExit();
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
          validate:   function   (idnumber)   {
            if   (idnumber == NaN)   {
              
              
              return false;
           
            }
            return true
          },
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
          validate: function (managerEmail) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              managerEmail
            );
          },
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
          validate:   function   (idnumber)   {
            if   (idnumber == NaN)   {
              
              
              return false;
           
            }
            return true
          },
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
          validate: function (managerEmail) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              managerEmail
            );
          },
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
        console.log(teamMembers + "2");
        createTeam();
      });
  }
  function saveAndExit() {
    console.log(teamMembers);
    console.log("awesome I did it");

    const htmlteam = teamMembers.map(member => {
      return generateCard(member);
    });
    var teamCard =   generateHTML(htmlteam);
    fs.writeFileSync("output/index.html",teamCard,"utf-8" )
    console.log(teamCard)
  
  }
}
createManager();
