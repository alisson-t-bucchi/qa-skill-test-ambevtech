class RegisterPage {
  fillName(name) {
    cy.get('input[name="nome"]').type(name);
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }
}

export default new RegisterPage();