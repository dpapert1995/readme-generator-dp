// BEGIN README GENERATOR CODE
// Include packages needed for this application through requires
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Questions for user input
// When each prompt is ran, it runs a validate method check to make sure each input is valid. 
// See https://www.npmjs.com/package/inquirer#methods for documentation of methods used.
const questions = [
    // Project Name
    {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the project:',
        validate: userTitle => {
            if (userTitle) {
                return true;
            } 
            else {
                console.log('Please enter a title to continue:');
                return false;
            }
        }
    },
    // Description of Project
    {
        name: 'description',
        type: 'input',
        message: 'Enter the project description:',
        validate: userDescription => {
            if (userDescription) {
                return true;
            } 
            else {
                console.log('Please enter a description to continue:');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        name: 'installation',
        type: 'input',
        message: 'Enter installation instructions:',
        validate: installationInstructions => {
            if (installationInstructions) {
                return true;
            } 
            else {
                console.log('Please enter installation instructions to continue:');
                return false;
            }
        }
    },
    // Purpose/ Usage 
    {
        name: 'usage',
        type: 'input',
        message: 'Enter project purpose/ usage:',
        validate: userUsage => {
            if (userUsage) {
                return true;
            } 
            else {
                console.log('Please enter purpose/ usage to continue:');
                return false;
            }
        }
    },
    // Contribution Instructions
    {
        name: 'contribution',
        type: 'input',
        message: 'Enter contribution instructions:',
        validate: contributionGuidelines => {
            if (contributionGuidelines) {
                return true;
            } 
            else {
                console.log('Please enter contribution instructions to continue:');
                return false;
            }
        }
    },
    // Test Instructions 
    {
        name: 'testing',
        type: 'input',
        message: 'Enter test instructions:',
        validate: tests => {
            if (tests) {
                return true;
            } 
            else {
                console.log('Please enter test instructions to continue:');
                return false;
            }
        }
    },
    // License Options
    {
        name: 'licensing',
        type: 'checkbox',
        message: 'Choose a license for your project:',
        choices: ['Apache (2.0)', 'General-Public-License (3.0)', 'MIT', 'Mozilla (2.0)', 'Unlicensed'],
        validate: license => {
            if (license) {
                return true;
            } 
            else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },
    // Github Username
    {
        name: 'github',
        type: 'input',
        message: 'Enter your GitHub Username (Required)',
        validate: userGithub => {
            if (userGithub) {
                return true;
            } 
            else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    // Email Address
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email:',
    },
];

// Writes README.md file
function writeToFile(fileName, markDown) {
    fs.writeFile(fileName, markDown, error => {
    if (error) {
      return console.log('ERROR: ' + error);
    }
  })
};

// Function to initialize app when "node index.js" is invoked on the command line
function init() {
    inquirer.prompt(questions)
    .then(function (inputs) {
        writeToFile("README_Sample.md", generateMarkdown(inputs));
    });
};

// Initialize app
init();
