// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs'); 
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'usage',
    message: "What will the application be used for?"},

    {type: 'input',
    name: 'instructions',
    message: "How is the application used?"},

    {type: 'input',
    name: 'installation',
    message: "Please provide instructinos for installing the application"},

    {type: 'input',
    name: 'issues',
    message: "How are application issues reported?"},
   
    {type: 'input',
    name: 'contributions',
    message: "How can developers make contributions to the application?"},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let filler = `Hello World`
    fs.writeFile('README.md', filler, (err) =>
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(filename, data)
    })
}

// Function call to initialize app
init();
