/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class Portfolio {
  getMoneyDepositLink() {
    return cy.contains('デポジット');
  }

  getMoneyWithdrawalLink() {
    return cy.contains('引き出す');
  }

  getBalanceAmount() {
    return cy.get('.side-header').first().siblings();
  }
}

export default Portfolio;
