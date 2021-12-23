/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class Deposit {
  getAmountInputTextfFeld() {
    return cy.get('input');
  }

  getTransactionFeeAmount() {
    return cy.get('span').eq(3);
  }

  getDeductedDepositAmount() {
    return cy.get('span').eq(5);
  }

  getDepositButton() {
    return cy.get('button');
  }
}

export default Deposit;
