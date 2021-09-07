// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: "What is the name of the application?"},

    {type: 'input',
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
    
    {type: 'input',
    name: 'email',
    message: "What is your email?"},
    
    {type: 'input',
    name: 'github',
    message: "What is your github username?"},

    {type: 'list',
    name: 'license',
    message: "What license will be added?",
    choices: ["MIT", "BSD", "GPL"]},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let filler = `# ${data.license} License

    # TITLE
    ${data.name}

    # DESCRIPTION
    ${data.usage}

    # TABLE OF CONTENTS
    * [Title](#title)
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Questions](#questions)
    
    # INSTALLATION
    ${data.installation}

    # USAGE
    ${data.usage}

    # LICENSE
    ${data.license} License

    # CONTRIBUTIONS
    ${data.contributions}

    # TESTS 
    ${data.test}

    # ISSUES
    ${data.issues}

    # QUESTIONS
    * ${data.email}
    * ${data.github}`


    fs.writeFile(fileName, filler, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let fileName = `${data.name}` + ".md";
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
