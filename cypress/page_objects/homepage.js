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
}
module.exports = new homePage();
