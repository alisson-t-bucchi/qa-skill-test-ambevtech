import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';

Given('user opens the login page', () => {
  LoginPage.visit();
});

When('the user inserts incorrect email {string} and password {string}', (email, password) => {
  LoginPage.fillEmail(email);
  LoginPage.fillPassword(password);
});

When('the user clicks the {string} button', (buttonText) => {
  LoginPage.clickButton(buttonText);
});

Then('an error message should be displayed', () => {
  LoginPage.verifyInvalidLoginMessage();
});
