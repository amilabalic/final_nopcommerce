class homePage {
  registerBtn() {
    return cy.get('.ico-register');
  }
  loginBtn() {
    return cy.get('.ico-login');
  }

  computersBtn() {
    return cy.get('.notmobile > :nth-child(1) > [href="/computers"]');
  }

  desktopsBtn() {
    return cy.get(
      'body > div.master-wrapper-page > div.header-menu > ul.top-menu.notmobile > li:nth-child(1) > ul > li:nth-child(1) > a'
    );
  }
  closeBannerBtn() {
    return cy.get('.close');
  }

  cartBtn() {
    return cy.get('.cart-label');
  }

  excellentPollBtn() {
    return cy.get('#pollanswers-1');
  }

  voteBtn() {
    return cy.get('#vote-poll-1');
  }

  cartElementsBtn() {
    return cy.get('#topcartlink > a > span.cart-qty');
  }

  loadingAnimation() {
    return cy.get('#poll-voting-progress-1');
  }

  firstPollResult() {
    return cy.get('.poll-results > :nth-child(1)');
  }

  secondPollResult() {
    return cy.get('.poll-results > :nth-child(2)');
  }

  thirdPollResult() {
    return cy.get('.poll-results > :nth-child(3)');
  }

  fourthPollResult() {
    return cy.get('.poll-results > :nth-child(4)');
  }

  compareListHyperlink() {
    return cy.get('.customer-service > .list > :nth-child(5) > a');
  }

  giftCardsBtn() {
    return cy.get('.notmobile > :nth-child(7) > a');
  }

  searchInput() {
    return cy.get('#small-searchterms');
  }

  searchBtn() {
    return cy.get('#small-search-box-form > .button-1');
  }
}
module.exports = new homePage();
