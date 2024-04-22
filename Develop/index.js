// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'titleInput'
    },
    {
        message: 'How would you describe this project?',
        name: 'descriptionInput'
    },
    {
        message: 'How do you install this application?',
        name: 'installationInput'
    },
    {
        message: 'How do you use this application?',
        name: 'usageInput'
    },
    {
        type: 'list',
        message: 'What type of license does this application have?',
        choices: ['1', '2', '3'],
        name: 'licenseInput'
    },
    {
        message: 'How do you contribute to this application?',
        name: 'contributingInput'
    },
    {
        message: 'How can you test this application?',
        name: 'testInput'
    },
    {
        message: 'What is your GitHub username?',
        name: 'githubInput'
    },
    {
        message: 'What is your email address?',
        name: 'emailInput'
    },

];

// TODO: Create a function to write README file
const writeToREADME = (responseText) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', responseText, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Data written to README.md');
            }
        });
    });
};



// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const {titleInput, descriptionInput, installationInput, usageInput, licenseInput, contributingInput, testInput, githubInput, emailInput} = answers;

            // const responseText = `Title: ${titleInput}\nDescription: ${descriptionInput}\nInstallation: ${installationInput}\nUsage: ${usageInput}\nLicense: ${licenseInput}\nContributing: ${contributingInput}\nTesting: ${testInput}\nGitHub: ${githubInput}\nEmail: ${emailInput}`

            responseText = 
`# ${titleInput}

## Description

${descriptionInput}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installationInput}

## Usage

${usageInput}

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Contributing

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

Any questions about this application should be directed to:

My GitHub: https://github.com/${githubInput}
My Email: ${emailInput}`

            writeToREADME(responseText)
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

// Function call to initialize app
init();

