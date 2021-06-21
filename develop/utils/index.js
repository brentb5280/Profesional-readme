// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//const generateMd = require("./generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

inquirer.prompt([
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
]).then(data => {
    const {
        username,
        email,
        title,
        description,
        license,
        installation,
        tests,
        usage,
        contribute,
    } = data;
    const template =
    `
    ## Table of Contents
        *[Name]
        *[Email]
        *[Title]
        *[Description]
        *[License]
        *[Installation]
        *[Test]
        *[Usage]
        *[Contribute]
    # ${data.title}

    ## Desciption

    ${data.description}

    ## Email
    ${data.email}

    ##License
    ${data.license}

    ## Installation
    ${data.installation}

    ## Test
    ${data.usage}

    ##Contribute
    ${data.contribute}
     `;
     // TODO: Create a function to write README file

     writeFileAsync("readme-generated.md", template).catch(err => {
         console.log(err);
     });
});





