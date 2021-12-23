/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import {
  And, Given, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import Deposit from '../ui-identifiers/Deposit';
import Login from '../ui-identifiers/Login';
import Portfolio from '../ui-identifiers/Portfolio';
import Withdraw from '../ui-identifiers/Withdraw';

const login = new Login();
const portfolio = new Portfolio();
const deposit = new Deposit();
const withdraw = new Withdraw();

let amount: number;

Given('User creates an account by entering the username as {string} and password as {string}', (username, password) => {
  cy.visit('/');
  login.getSignUpButton().click();
  login.getUsername().type(username);
  login.getPassword().type(password);
  login.getLoginButton().click();
});

And('User chooses to deposit an amount', () => {
  portfolio.getMoneyDepositLink().click();
});

When('User enters the amount of {string}', (value: string) => {
  amount = Number(value);
  deposit.getAmountInputTextfFeld().type(String(amount));
});

Then('Users find the transaction fee to be the {string} of the intended deposit amount, followed by the final deposit amount after deduction', (fee) => {
  const transactionFee = (parseInt(fee) / 100) * amount;
  deposit.getTransactionFeeAmount().then((getFee) => {
    expect(getFee.text().trim()).to.equal(transactionFee.toFixed(2));
  });

  deposit.getDeductedDepositAmount().then((getDepositedAmount) => {
    const finalDepositedAmount = ((amount - transactionFee).toFixed(2));
    expect(getDepositedAmount.text().trim()).to.equal(finalDepositedAmount);
  });
});

And('User chooses to withdraw an amount', () => {
  portfolio.getMoneyWithdrawalLink().click();
});

Then('Users find the transaction fee to be the {string} of the intended withdrawal amount, followed by the final withdrawal amount after deduction', (fee) => {
  const transactionFee = (parseInt(fee) / 100) * amount;
  withdraw.getTransactionFeeAmount().then((getFee) => {
    expect(getFee.text().trim()).to.equal(transactionFee.toFixed(2));
  });

  withdraw.getDeductedWithdrawalAmount().then((getWithdrawalAmount) => {
    const finalWithdrawalAmount = ((amount - transactionFee).toFixed(2));
    expect(getWithdrawalAmount.text().trim()).to.equal(finalWithdrawalAmount);
  });
});

And('User sees the balance of {string}', (balance) => {
  portfolio.getBalanceAmount().should('have.text', balance);
});

And('User deposit an amount of {string}', (value) => {
  portfolio.getMoneyDepositLink().click();
  amount = Number(value);
  deposit.getAmountInputTextfFeld().type(String(amount));
  deposit.getDepositButton().click();
});

And('User find the total balance {string} to get updated within {int} seconds', (balance, time) => {
  portfolio.getBalanceAmount().should('have.text', balance, { setTimeout: time * 1000 });
});
