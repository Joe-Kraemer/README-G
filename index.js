// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
// const questions = [
//     "Please enter title", "Please enter Description", "Please enter installation instructions", "Please enter usage information", "Please enter contribution guidelines", "Please enter test instructions", "Please Enter Github Username", "Please enter Email",
// ];

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'what is your github?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email?',
  },
  {
    type: 'input', 
    name: 'title',
    message: 'what is your ppoject name?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'write desr=cription',
  },
  {
    type: 'list',
    name: 'license',
    message: 'what licence',
    choices: ['a', 'b', 'c', 'd'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'how ot install',
    default: 'npm install'
  },


]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    writeToFile('README.md', generateMarkdown({...res}))
  })
}

// Function call to initialize app
init();
