class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillEmail(email) {
    cy.get('input[name=email]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name=password]').type(password);
  }

  clickButton(buttonText) {
    cy.contains('button', buttonText).click();
  }

  verifyInvalidLoginMessage() {
    cy.contains('Email e/ou senha inválidos').should('be.visible');
  }
}

export default new LoginPage();