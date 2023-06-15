const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, install, usage, features, tech, contribute, test, github, email, collaborators, credits, license, theme}) =>

`# **${title}** ${license}

${description}

# **Table of Contents**

Edit Table of Contents here

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

# **Contribute**

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
      name: 'title',
      message: 'What is your projects title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Brief explination about your project?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'What are this applications features?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does this application work? Provide instructions and examples for use. Include screenshots as needed after file is created.',
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
      message: 'How many collaborators, if any, for this project?',
      choices: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
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
    
    if (answers.collaborators === '0') {
      answers['credits'] = '';
      console.log(answers.credits);
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
    answers['credits'] = (`-${answers2.credits}`);
    console.log(answers);
    const READMEPageContent = generateREADME(answers);
    fs.writeFile('README.md', READMEPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
  })} else {
      console.error('not found');
    }
  });