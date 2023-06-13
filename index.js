const inquirer = require('inquirer');
const fs = require('fs');

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
      name: 'installation',
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
      name: 'usage',
      message: 'How does this application work?',
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
  ])
  .then((answers) => {
    console.log(answers);
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });