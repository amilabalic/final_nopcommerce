import cartPage from '../page_objects/cartPage';
import desktopsPage from '../page_objects/desktopsPage';
import homepage, { closeBannerBtn } from '../page_objects/homepage';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import registerPage from '../page_objects/registerPage';
import 'cypress-real-events/support';

Cypress.Commands.add('registerForm', () => {
  cy.get('.ico-login').should('have.text', 'Log in');
  cy.fixture('data').then((data) => {
    cy.get('@firstName').then((firstName) => {
      registerPage.firstNameInput().type(firstName);
    });
    cy.get('@lastName').then((lastName) => {
      registerPage.lastNameInput().type(lastName);
    });
    cy.get('@email').then((email) => {
      registerPage.emailInput().type(email);
    });
    registerPage.passwordInput().type(data.password);
    registerPage.confirmPasswordInput().type(data.password);
  });
});

Cypress.Commands.add('loginForm', () => {
  cy.fixture('data').then((data) => {
    cy.get('@email').then((email) => {
      loginPage.emailInput().type(email);
    });
    loginPage.passwordInput().type(data.password);
  });
});

Cypress.Commands.add('addProductToCart', () => {
  homepage.computersBtn().realHover('mouse');
  homepage.desktopsBtn().click();
  desktopsPage.buildYourOwnComputerBtn().click();
  productPage.ramSelectDrp().select('2 GB').should('have.value', '3');
  productPage.hddRadioBtn().click();
  productPage.addToCartBtn().click();
  productPage
    .addToCartBanner()
    .should('be.visible')
    .should('have.css', 'background-color', 'rgb(75, 176, 122)')
    .should('have.text', 'The product has been added to your shopping cart');
  productPage.closeBtnBanner().should('be.visible');
  productPage
    .hyperlinkBanner()
    .should('be.visible')
    .should('have.attr', 'href', '/cart')
    .should('have.text', 'shopping cart');
  homepage.cartElementsBtn().should('have.text', '(1)');
});

Cypress.Commands.add('removeProductFromCart', () => {
  homepage.closeBannerBtn().click();
  homepage.cartBtn().click();
  cy.wait(2000);
  cartPage.removeBtn().click();
  cy.wait(2000);
  cy.get('.no-data').then(($div) => {
    expect($div).to.have.text('\nYour Shopping Cart is empty!\n');
  });
  homepage.cartElementsBtn().should('have.text', '(0)');
});

Cypress.Commands.add('addProductToCompareList', () => {
  homepage.computersBtn().realHover('mouse');
  homepage.desktopsBtn().click();
  productPage.compareBtn().click();
  cy.wait(1000);
  productPage
    .addToCartBanner()
    .should('be.visible')
    .should('have.css', 'background-color', 'rgb(75, 176, 122)')
    .should(
      'have.text',
      'The product has been added to your product comparison'
    );

  productPage
    .hyperlinkCompareBanner()
    .should('be.visible')
    .should('have.attr', 'href', '/compareproducts')
    .should('have.text', 'product comparison');

  productPage.closeBtnBanner().should('be.visible');
});

Cypress.Commands.add('removeProductFromTheCompareList', () => {
  homepage.compareListHyperlink().click();
  cy.get('.button-2').click();
  cy.wait(500);
  cy.get('.no-data').then(($div) => {
    expect($div).to.have.text('You have no items to compare.');
  });
});

Cypress.Commands.add('takingCommunityPoll', () => {
  homepage.excellentPollBtn().click();
  homepage.voteBtn().click();
  homepage.loadingAnimation().should('be.visible');
  homepage.firstPollResult().contains('Excellent');
  homepage.secondPollResult().contains('Good');
  homepage.thirdPollResult().contains('Poor');
  homepage.fourthPollResult().contains('Very bad');
});
