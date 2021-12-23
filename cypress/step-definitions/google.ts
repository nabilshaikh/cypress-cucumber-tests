/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('User visits {string} page', (pageName) => {
  cy.visit(pageName);
});
