class desktopsPage {
  buildYourOwnComputerBtn() {
    return cy.get(
      ':nth-child(1) > .product-item > .details > .product-title > a'
    );
  }
}
module.exports = new desktopsPage();
