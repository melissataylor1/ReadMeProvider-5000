// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'projecttitle',
        message: 'What is title of your project?'
    },
    //Description Steps 1-4
    {
        type: 'input',
        message: 'What was your motivation for this project?',
        name: 'motivation',
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
        message: 'What are the Installation steps?',
        name: 'installation'
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
        message: 'What type of license should your project have?',
        choices:[
            'mit',
            'apache2.0', 
            'unlicense', 
            'mpl2.0', 
            'None'
        ]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
