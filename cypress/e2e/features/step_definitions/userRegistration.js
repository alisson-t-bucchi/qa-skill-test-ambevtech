import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../e2e/pages/LoginPage';
import RegisterPage from '../../e2e/pages/RegisterPage';


Given('I am on the ServeRest login page', () => {
  LoginPage.visit();
});

When('I click on the {string} link', (linkText) => {
  cy.contains(linkText).click();
});

When('I enter the name {string}, email {string}, and password {string}', (name, email, password) => {
    RegisterPage.fillName(name);
    RegisterPage.fillEmail(email);
    RegisterPage.fillPassword(password);
  }
);

When('I click the {string} button and redirected to the home page', (buttonText) => {
  cy.get(`[data-testid="${buttonText}"]`).click();
  cy.url({ timeout: 10000 }).should('include', '/home');
});