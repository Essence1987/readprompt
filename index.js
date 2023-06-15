const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({begin, title, table, motivation, install, usage, features, tech, contribute, test, github, email, collaborators, credits, license, theme, assets}) =>

`# **${title}** ${license}

${motivation}

${table}

# **Features**

${features}

# **Installation**

${install}

# **Usage**

${usage}

# **Technologies Used**

${tech}

# **Test**

The following animation demonstrates the application functionality:

${test}

# **Credits**

${credits}

${assets}

# **How to Contribute**

${contribute}

# **Questions**

Click the image below to go to my github page!

<a href="https://github.com/${github}"><img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${github}&theme=${theme}"/></a>

My email is ${email}

# **License**

${title} is released under ${license}.`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'begin',
      message: 'The majority of questions are optional. If you do not know the answer, or wish to enter it at a later date, then leave it blank and hit enter to continue on. All questions presented in a list format must have an answer. You can cancel creation of the README file by pressing Ctrl + D on any question. Your answers will not be saved if canceled. Please hit enter when you are ready to proceed.',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your projects title?',
    },
    {
      type: 'list',
      name: 'table',
      message: 'Would you like to include a table of contents? This is an optional choice as shorter readme files may not need one.',
      choices: ['Yes',
    'No',
  ]
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide. What was your motivation? Why did you build this project? (Note: the answer is not "Because I felt like it.") What problem does it solve? What did you learn?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'What are this applications features?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. If images required for explination those will need to be added manually.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does this application work? Provide instructions and examples for use. Include screenshots as needed manually after file is created.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to this project?',
      },
    {
      type: 'input',
      name: 'test',
      message: 'How can someone run tests on this application?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail?',
    },
     {
      type: 'input',
      name: 'tech',
      message: 'What tecnology was used to create this project?',
    },
    {
      type: 'list',
      name: 'theme',
      message: 'Choose a theme for your Github Profile Card.',
      choices: [
        'default',
        '2077',
        'dracula',
        'github',
        'github_dark',
        'gruvbox',
        'monokai',
        'nord_bright',
        'nord_dark',
        'radical',
        'solarized',
        'solarized_dark',
        'tokyonight',
        'vue',
        'zenburn',
      ]
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license is this project?',
      choices: [
        'MIT',
        'GNU',
        'Apache',
      ]
    },
    {
      type: 'list',
      name: 'collaborators',
      message: 'How many collaborators, if any, for this project? We will ask for their usernames later to create links to their github page. More than 4 will require making additonal entries manually.',
      choices: [
        '0',
        '1',
        '2',
        '3',
        '4',
      ]
    },
    {
      type: 'list',
      name: 'assets',
      message: 'How many third-party assets did you use that require attribution? This includes, but is not limited too, APIs, Repos, npm, node, programs, ext.',
      choices: [
        '0',
        '1',
        '2',
        '3',
        '4',
      ]
      },
  ])

  .then((answers) => {
    console.log(answers);
    if (answers.license === 'MIT') {
      answers['license'] = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      console.log(answers.license);
    } else if (answers.license === 'GNU') {
      answers['license'] = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      console.log(answers.license);
    } else if (answers.license === 'Apache') {
      answers['license'] = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      console.log(answers.license);
    } else {
      console.error('not found');
    }
    
    if (answers.table === 'Yes') {
      answers['table'] = '#**Table of Contents**<br>1. [Credits](#Credits)'
    } else if (answers.table === 'No') {
      answers['table'] = ''
    }

    if (answers.assets === '0') {
      answers['assets'] = 'No third party assets were used in the creation of this project.'
      console.log(answers.assets);
    } else if (answers.assets === '1') {
      answers['assets'] = "testing."
      console.log(answers.assets);
    }

    if (answers.collaborators === '0') {
      answers['credits'] = 'This was a solo project with no contributers taking part.';
      console.log(answers.credits);
        console.log(answers);
        const READMEPageContent = generateREADME(answers);
    fs.writeFile('README.md', READMEPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!'));
    } else if (answers.collaborators === '1') {
      inquirer
  .prompt([
    {
      type: 'input',
      name: 'credits',
      message: 'What is the frist contributers github username?',
    },
  ]) 
  .then((answers2) => {
    console.log(answers2);
    answers['credits'] = (`The following individual assisted me in this project. Clicking their name will take you to their personal Repo. <br>-<a href="https://github.com/${answers2.name}>`);
    console.log(answers);
    const READMEPageContent = generateREADME(answers);
    fs.writeFile('README.md', READMEPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  ); 
  })} else if (answers.collaborators === '2') {
    inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the frist contributers github username?',
  },
  {
    type: 'input',
    name: 'name2',
    message: 'What is the second contributers github username?',
  },
]) 
.then((answers2) => {
  console.log(answers2);
  answers['credits'] = (`The following individuals assisted me in this project. Clicking their name will take you to their personal Repos.<br><a href="https://github.com/${answers2.name}">${answers2.name}</a><br>-<a href="https://github.com/${answers2.name2}">${answers2.name2}</a>`);
  console.log(answers);
  const READMEPageContent = generateREADME(answers);
  fs.writeFile('README.md', READMEPageContent, (err) =>
  err ? console.log(err) : console.log('Successfully created README.md!')
); 
})} else if (answers.collaborators === '4') {
  inquirer
.prompt([
{
  type: 'input',
  name: 'name',
  message: 'What is the frist contributers github username?',
},
{
  type: 'input',
  name: 'name2',
  message: 'What is the 2nd contributers github username?',
},
{
  type: 'input',
  name: 'name3',
  message: 'What is the 3rd contributers github username?',
},
{
  type: 'input',
  name: 'name4',
  message: 'What is the 4th contributers github username?',
},
]) 
.then((answers2) => {
console.log(answers2);
answers['credits'] = (`The following individuals assisted me in this project. Clicking their name will take you to their personal Repos.<br>-<a href="https://github.com/${answers2.name}">${answers2.name}</a><br>-<a href="https://github.com/${answers2.name2}">${answers2.name2}</a><br>-<a href="https://github.com/${answers2.name3}">${answers2.name3}</a><br>-<a href="https://github.com/${answers2.name4}">${answers2.name4}</a>`);
console.log(answers);
const READMEPageContent = generateREADME(answers);
fs.writeFile('README.md', READMEPageContent, (err) =>
err ? console.log(err) : console.log('Successfully created README.md!')
); 
})} else if (answers.collaborators === '3') {
  inquirer
.prompt([
{
  type: 'input',
  name: 'name',
  message: 'What is the frist contributers github username?',
},
{
  type: 'input',
  name: 'name2',
  message: 'What is the 2nd contributers github username?',
},
{
  type: 'input',
  name: 'name3',
  message: 'What is the 3rd contributers github username?',
},
]) 
.then((answers2) => {
console.log(answers2);
answers['credits'] = (`The following individuals assisted me in this project. Clicking their name will take you to their personal Repos.<br>-<a href="https://github.com/${answers2.name}">${answers2.name}</a><br>-<a href="https://github.com/${answers2.name2}">${answers2.name2}</a><br>-<a href="https://github.com/${answers2.name3}">${answers2.name3}</a>`);
console.log(answers);
const READMEPageContent = generateREADME(answers);
fs.writeFile('README.md', READMEPageContent, (err) =>
err ? console.log(err) : console.log('Successfully created README.md!')
); 
})} else {
      console.error('not found');
    }
  });