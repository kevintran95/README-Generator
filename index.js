// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, 
{
    type: "input",
    message:"Write a brief description about your project:",
    name: "description"
}, {

    type: "input",
    message:'Please enter installation instructions',
    name:'installation'
},
{
    type: 'input',
    message:'Please enter usage information',
    name:'usage'
},
{
    type: 'input',
    message:'What licenses will you be using',
    name:'license'
},
{
    type:'input',
    message:'Please enter test instructions',
    name:'test-instructions'
},
{
    type:'input',
    message:'Please enter your github URL',
    name:'githubURL'
},
{
    type:'input',
    message:'Please enter your contact email',
    name:'contact'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
