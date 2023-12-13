class productPage {
  ramSelectDrp() {
    return cy.get('#product_attribute_2');
  }

  hddRadioBtn() {
    return cy.get('#product_attribute_3_6');
  }

  addToCartBtn() {
    return cy.get('#add-to-cart-button-1');
  }

  addToCartBanner() {
    return cy.get('.bar-notification');
  }
}
module.exports = new productPage();
