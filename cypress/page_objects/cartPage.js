class cartPage {
  removeBtn() {
    return cy.get('.remove-btn');
  }

  removedDiv() {
    cy.get('div.no-data');
  }
}
module.exports = new cartPage();
