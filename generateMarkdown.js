// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![Generic badge](https://img.shields.io/badge/license-${data.license}-green.svg)](https://shields.io/)

## Description
${data.description}

---
**Table of Contents**
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [License](#License)
 - [Contributing](#Contributing)
 - [Tests](#Tests)
 - [Questions](#Questions)

---
## Installation
${data.install}

---
## Usage
${data.usageInfo}

---
## License
This application is covered under the ${data.license} license.

---
## Contributing
${data.contribution}

---
## Tests
${data.test}

---
## Questions 

**GitHub Username:** ${data.gitHub}

**GitHub URL:** github.com/${data.gitHub}

For any additional questions you can contact me at *${data.email}*.

`;
}

module.exports = generateMarkdown;
