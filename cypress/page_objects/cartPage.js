class cartPage {
  removeBtn() {
    return cy.get('button.remove-btn');
  }
}
module.exports = new cartPage();
