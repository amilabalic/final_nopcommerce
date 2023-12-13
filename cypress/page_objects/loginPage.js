class loginPage {
  emailInput() {
    return cy.get('#Email');
  }
  passwordInput() {
    return cy.get('#Password');
  }

  loginBtn() {
    return cy.get('form > .buttons > .button-1');
  }
}
module.exports = new loginPage();
