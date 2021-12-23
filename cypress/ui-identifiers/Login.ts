/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class Login {
  getUsername() {
    return cy.get('input').first();
  }

  getPassword() {
    return cy.get('[type="password"]');
  }

  getSignUpButton() {
    return cy.get('button').first().should('exist');
  }

  getLoginButton() {
    return cy.get('button').last();
  }

  getErrorMessageText() {
    return cy.get('span');
  }
}

export default Login;
