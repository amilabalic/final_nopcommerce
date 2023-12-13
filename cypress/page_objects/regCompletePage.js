class regCompletePage {
  continueBtn() {
    return cy.get('.buttons > .button-1');
  }
}
module.exports = new regCompletePage();
