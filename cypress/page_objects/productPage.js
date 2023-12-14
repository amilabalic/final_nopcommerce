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

  closeBtnBanner() {
    return cy.get('span[title="Close"]');
  }

  hyperlinkBanner() {
    return cy.contains('a', 'shopping cart');
  }

  hyperlinkCompareBanner() {
    return cy.get('.content > a');
    // cy.contains('a', 'product comparison')
  }

  compareBtn() {
    return cy.get(
      ':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button'
    );
  }
}
module.exports = new productPage();
