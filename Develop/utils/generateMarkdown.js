// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if(license === 'Apache 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] (https://opensource.org/licenses/Apache-2.0)'
  }
  else if(license === 'GNU GPL v3'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)] (https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if(license === 'MPL 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}



// function that returns the license link
function renderLicenseLink(license) {
  if( license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  }
  if( license === 'GNU GPL v3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if( license === 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if( license === 'MPL 2.0'){
  return 'https://opensource.org/licenses/MPL-2.0'
  }
}
// function that returns the license section of README
function renderLicenseSection(license) {
  
  if (license === 'MIT') {
    return license = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  }
  if (license === 'Apache 2.0') {
    return license = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
  }
  if (license === 'GNU GPL v3') {
    return license = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg' 
  }
  if( license === 'MPL 2.0'){
  return 'https://opensource.org/licenses/MPL-2.0'
  }
  if (license === "None") {
    section = "";
  } 
}

// function to generate markdown for README


function generateMarkdown(data) {
  const section = renderLicenseSection(data);
  const readmeText = `
  
  # ${data.title}

  [${data.license}]
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.motivation}
  ${data.solution}
  ${data.learn}

  ## Screenshot of Project
  ${data.screenshot}

 ## Table of Contents 
 
 [Installation](#Installation)
 [Tests](#Test)
 [Usage](#Usage)
 [License](#License)
 [Credits](#Credits)

  [Questions](#Questions)
 
 
 ## Installation 

 To install any necessary dependencies for this project, run the following command in your terminal:
 
 ${data.installation}
 
  
 ## Tests

Run the following command to start tests:
 
 ${data.test}
 
 ## Usage 

 ${data.usage}
 
 
 ## License 
 This project is licensed under the ${data.license} license.
 ${renderLicenseBadge (data.license)}
 
 
 ## Credits

 ${data.credits}
 

 
 ## Questions

 If you have any questions about the project, contact me at [${data.email}](mailto:${data.email}). 

 You can find my other Github work at: [${data.username}](https://github.com/${data.username}).`;

 return readmeText;
}

module.exports = generateMarkdown;
