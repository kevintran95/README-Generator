// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const { report } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')



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
    name:'license',
    choices: ['Apache', 'MIT', 'ISC', 'Other']
},
{
    type: 'input',
    message: 'Please list the contributers:',
    name:'contributers'
},
{
    type:'input',
    message:'Please enter test instructions',
    name:'testinstructions'
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
//function writetoFile (filename, data){}


// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
        .then(response => {
            
        fs.writeFile("READme.md", generateMarkdown(response), (err) =>
         err ? console.log(err) : console.log('success')
         );
       }) 
         
};
// Function call to initialize app
init();
