const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");







const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (please note max 3 charcaters):',
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the preferred text color:',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the preferred shape color:',

    },
];

//.then((answers) => {
//    if (answers.text.length > 3) {
//      console.log("Must be no more than 3 characters");