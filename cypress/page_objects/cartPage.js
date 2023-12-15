class cartPage {
  removeBtn() {
    return cy.get('.remove-btn');
  }

  removedDiv() {
    cy.get('div.no-data');
  }

  estimateShippingBtn() {
    return cy.get('#open-estimate-shipping-popup');
  }

  selectCountryDrp() {
    return cy.get('#CountryId');
  }

  zipInput() {
    return cy.get('#ZipPostalCode');
  }

  applyBtn() {
    return cy.get('.apply-shipping-button-container > .button-2');
  }
}
module.exports = new cartPage();
