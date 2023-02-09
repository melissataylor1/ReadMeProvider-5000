// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

