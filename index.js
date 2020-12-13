const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your projects title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of the project.',
  },
  {
    type: 'input',
    name: 'install',
    message: 'Enter installation instructions.',
  },
  {
    type: 'input',
    name: 'usageInfo',
    message: 'Enter usage information.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions.',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Enter your GitHub username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license.',
    choices: ["Public Domain", "Permissive", "LGPL", "Copyleft", "Proprietary"],
  },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
