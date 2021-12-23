/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class Withdraw {
  getTransactionFeeAmount() {
    return cy.get('span').eq(3);
  }

  getDeductedWithdrawalAmount() {
    return cy.get('span').eq(5);
  }
}

export default Withdraw;
