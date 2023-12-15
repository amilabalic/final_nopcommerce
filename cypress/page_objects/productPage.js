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
  }

  compareBtn() {
    return cy.get(
      ':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button'
    );
  }

  giftCardHyperlink() {
    return cy.get(
      ':nth-child(1) > .product-item > .details > .product-title > a'
    );
  }

  recipientsNameInput() {
    return cy.get('#giftcard_43_RecipientName');
  }

  recipientsEmailInput() {
    return cy.get('#giftcard_43_RecipientEmail');
  }

  senderNameInput() {
    return cy.get('#giftcard_43_SenderName');
  }

  senderEmailInput() {
    return cy.get('#giftcard_43_SenderEmail');
  }

  addGiftToCartBtn() {
    return cy.get('#add-to-cart-button-43');
  }
}
module.exports = new productPage();
