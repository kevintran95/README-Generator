// TODO: Include packages needed for this application
const fs = require('fs');
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
    type: 'input',
    message: 'Please enter contribution guidelines:',
    name:'contributions'
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


// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
        .then(response => {
var markdown = `## Description
${response.description}
           
## Table of contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution](#contributing)
[Test](#test)
           
           
## Installation
${response.installation}
           
## Usage
${response.usage}
           
## License
${response.license}
           
## Contributing
${response.contributions}
           
## Tests
${response.testinstructions}
           
## Questions
If you have an questions please contact me at ${response.githubURL} or at ${response.contact}`

           fs.writeFile("READ.md", markdown, (err) =>
         err ? console.log(err) : console.log('success')
         );
       }) 
         
        
};
// Function call to initialize app
init();
