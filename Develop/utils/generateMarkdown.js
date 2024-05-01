const inquirer = require('inquirer')
const fs = require('fs');



// TODO:+ Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.name === 'None') {
    return ''
  } else return `[![License](${license.badge})](${license.link})`
}

// TODO:+ Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let sectionText;
  if (license.name === 'None') {
    sectionText = 'N/A'
  } else {
    sectionText = `### ${license.name}\nLicense Information: ${license.link}`;
  }
  return sectionText
}

const runPrompt = async(questions) => {
  const answers = await inquirer.prompt(questions)
  return answers
} 



// TODO:+ Create a function to generate markdown for README
function generateMarkdown({
  titleInput, 
  descriptionInput, 
  installationInput, 
  usageInput, 
  licenseInput, 
  contributingInput, 
  testInput, 
  githubInput, 
  emailInput
}) {

const generatedText = 

`# ${titleInput}

${renderLicenseBadge(licenseInput)}

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

${renderLicenseSection(licenseInput)}

## Contributing

${contributingInput}

## Tests

${testInput}

## Questions

Any questions about this application should be directed to:

GitHub: https://github.com/${githubInput}

Email: ${emailInput}`

return generatedText

}

module.exports = {generateMarkdown, runPrompt};
