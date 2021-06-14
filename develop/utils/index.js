// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err){
        if (err) {
            return console.log(err);
        } 
});
//fs.readFile("README.md", "utf8", function(error,log ) {

    //if (error) {
     //   return console.log(error)
    //}
//});


// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions)
 .then((answers) => {
    console.log(answers);

    })
 
}}


// Function call to initialize app
init();
