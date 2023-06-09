 //[! + name+badge]+link
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ""
  }
  //return the link if we do
  return license.badge 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ""
  }
  //return the link if we do
return license.url
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ""
  }
  //return the link if we do
const licenseLink = renderLicenseLink(license)
const licenseBadge = renderLicenseBadge(license)
return '[!' + license.text + licenseBadge + ']' + licenseLink
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {


  return `# ${data.title}

  # Title
  ${data.Title}

  ### Description
  ${data.description}

  ## Email
  ${data.email}

  ## Github
  ${data.github}
  
`;
}

module.exports = generateMarkdown;
// value: {
//   text: '[License: Apache]',
//   badge: '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
//   url: '(https://opensource.org/licenses/Apache-2.0)'
// }, //[! + name+badge]+link
