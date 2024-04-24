// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const {generateMarkdown, runPrompt} = require('./utils/generateMarkdown');

const licenseArray = [
    {
      name: 'Apache 2.0 License',
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      link: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
      name: 'BSD 3-Clause License',
      badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
      link: 'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
      name: 'Creative Commons Attribution 4.0 International',
      badge: 'https://licensebuttons.net/l/by/4.0/80x15.png',
      link: 'https://creativecommons.org/licenses/by/4.0/'
    },
    {
      name: 'Eclipse Public License 1.0',
      badge: 'https://img.shields.io/badge/License-EPL%201.0-red.svg',
      link: 'https://opensource.org/licenses/EPL-1.0'
    },
    {
      name: 'GNU GPL v3',
      badge: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      link: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
      name: 'IBM Public License Version 1.0',
      badge: 'https://img.shields.io/badge/License-IPL%201.0-blue.svg',
      link: 'https://opensource.org/licenses/IPL-1.0'
    },
    {
      name: 'The MIT License',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      link: 'https://opensource.org/licenses/MIT'
    },
    {
      name: 'Mozilla Public License 2.0',
      badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
      link: 'https://opensource.org/licenses/MPL-2.0'
    },
    {
      name: 'Open Database License (ODbL)',
      badge: 'https://img.shields.io/badge/License-ODbL-brightgreen.svg',
      link: 'https://opendatacommons.org/licenses/odbl/'
    },
    {
      name: 'The Perl License',
      badge: 'https://img.shields.io/badge/License-Perl-0298c3.svg',
      link: 'https://opensource.org/licenses/Artistic-2.0'
    },
    {
      name: 'The zlib/libpng License',
      badge: 'https://img.shields.io/badge/License-Zlib-lightgrey.svg',
      link: 'https://opensource.org/licenses/Zlib'
    },
    {
      name: 'None',
      badge: '',
      link: ''
    },
  ]

// const [apache, bsd, creativeCommons, eclipse, gnu, ibm, mit, mozilla, odbl, perl, zlib, none] = licenseArray
// const licenses = [apache, bsd, creativeCommons, eclipse, gnu, ibm, mit, mozilla, odbl, perl, zlib, none]

// const licenseChoices = []
// licenses.forEach((license) => {
//     const choice = {name: `${license.name}`, value: license}
//     licenseChoices.push(choice)
// })

const licenseChoices = licenseArray.map(license => {
    return {name: license.name, value: license}
})

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of your project?',
        name: 'titleInput',
        default: 'To be added'
    },
    {
        message: 'How would you describe your project?',
        name: 'descriptionInput',
        default: 'To be added'
    },
    {
        message: 'How do you install this application?',
        name: 'installationInput',
        default: 'To be added'
    },
    {
        message: 'How do you use this application?',
        name: 'usageInput',
        default: 'To be added'
    },
    {
        type: 'list',
        message: 'What type of license does this application have?',
        choices: licenseChoices,
        name: 'licenseInput'
    },
    {
        message: 'How do you contribute to this application?',
        name: 'contributingInput',
        default: 'To be added'
    },
    {
        message: 'How can you test this application?',
        name: 'testInput',
        default: 'To be added'
    },
    {
        message: 'What is your GitHub username?',
        name: 'githubInput',
        default: ''
    },
    {
        message: 'What is your email address?',
        name: 'emailInput',
        default: 'To be added'
    },

];

// TODO: Create a function to write README file
const writeToREADME = (data) => {
        fs.writeFile('README.md', data, (err) => {
            err ? console.error(err) : console.log('Data written to README.md')
        })
    }



// TODO: Create a function to initialize app
async function init() {
    const answers = await runPrompt(questions)
    const generatedText = generateMarkdown(answers)
    writeToREADME(generatedText)
}

// Function call to initialize app
init();

