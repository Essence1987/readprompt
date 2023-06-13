const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, install, usage, features, tech, contribute, test, github, email, credits, license}) =>

`# ${title}

${description}

# Features

${features}

# Installation

${install}

# Usage

${usage}

# Technologies Used

${tech}

# Test

The following animation demonstrates the application functionality:

${test}

# Credits

${credits}

#Contribute

${contribute}

#Questions

[Click here] (https://github.com/${github}) to find my Repo!
${email}

# License

${title} is released under the ${license} License. Feel free to modify and use the code for your own purposes.`;

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
      message: 'How does one install this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does this application work?',
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
      type: 'input',
      name: 'credits',
      message: 'Enter credentials for those who helped or are helping build this application.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What type of license is this project?',
      choices: [
        'mit',
        'fair',
        'notfair',
      ]
    },
  ])

  .then((answers) => {
    console.log(answers);
    if (answers.license === 'fair') {
      answers['license'] = 'I changed this using if statement';
      console.log(answers.license);
    } else if (answers.license === 'notfair') {
      console.log('no');
    } else {
      console.error('not found');
    }
    const READMEPageContent = generateREADME(answers);

    fs.writeFile('README.md', READMEPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
    
  });