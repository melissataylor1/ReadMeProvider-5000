// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: 'What is title of your project?',
        name: 'title'
    },
    //Description Steps 1-4
    {
        type: 'input',
        message: 'What was your motivation for this project?',
        name: 'motivation'
    },
    {
        type: 'input',
        message: 'What real-world solution does this project provide?',
        name: 'solution'
    },
    {
        type: 'input',
        message: 'What did you learn from working on this project?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'Provide screenshot/video: ',
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'What are the Installation steps? What commands need to be run to install dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command needs to be run to start tests?',
        name: 'command'
    }, 
    {
        type: 'input',
        message: 'Provide instructions for use of your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List any credits you may have fopr this project (collaborators, 3rd party assets, tutorials, etc)',
        name: 'credit'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license: ',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'MPL2.0', 'None']
    },
    {
        type: 'input',
        message: 'Enter your Github username: ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email: '
        name: 'email',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Your README file has been created!'))
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
            console.log(data)
        writeFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();