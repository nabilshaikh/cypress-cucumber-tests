/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import {
  And, Given, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import Login from '../ui-identifiers/Login';

const login = new Login();

Given('User chooses signup option', () => {
  /*
  DOM is getting detached during tests run. As the below solution isn't working, so I have to handle it using static wait.
  Note that static waits are not recommended. This is just for the assignment purpose.

  login.getSignUpButton().then((element) => {
    expect(Cypress.dom.isDetached(element)).to.equal(false);
  }).click();
  */

  cy.wait(3000);
  login
    .getSignUpButton()
    .click();
});

When('User skips username and enters the password as {string}', (password) => {
  login
    .getPassword()
    .type(password);
});

And('User clicks on Signup button', () => {
  login
    .getSignUpButton()
    .click();
});

Then('User should see an error message as {string}', (errorMessage) => {
  login
    .getErrorMessageText()
    .then((message) => {
      expect(message.text().trim()).to.equal(errorMessage);
    });
});

When('User enters the username as {string} and password as {string}', (username, password) => {
  login
    .getUsername()
    .type(username);
  login
    .getPassword()
    .type(password);
});

Then('User should get logged in successfully', () => {
  cy
    .url()
    .should('contain', 'portfolio');
});
