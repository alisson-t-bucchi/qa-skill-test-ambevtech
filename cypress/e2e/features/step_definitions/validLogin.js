import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';

Given('user is on the login page', () => {
  LoginPage.visit();
});

When('user enter the login credentials', () => {
  LoginPage.fillEmail(Cypress.env('USER'));
  LoginPage.fillPassword(Cypress.env('PASSWORD'));
});

When('click on the {string} button', (buttonText) => {
  LoginPage.clickButton(buttonText);
});

Then('I should be redirected to the main page', () => {
  cy.url({ timeout: 10000 }).should('include', '/home');
});