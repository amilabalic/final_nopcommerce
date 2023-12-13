class registerPage {
  firstNameInput() {
    return cy.get('#FirstName');
  }
  lastNameInput() {
    return cy.get('#LastName');
  }
  emailInput() {
    return cy.get('#Email');
  }

  passwordInput() {
    return cy.get('#Password');
  }
  confirmPasswordInput() {
    return cy.get('#ConfirmPassword');
  }

  registerBtn() {
    return cy.get('#register-button');
  }
}
module.exports = new registerPage();
