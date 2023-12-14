class cartPage {
  removeBtn() {
    return cy.get(
      '#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.remove-from-cart > button'
    );
  }

  removedDiv() {
    cy.get('div.no-data');
  }
}
module.exports = new cartPage();
