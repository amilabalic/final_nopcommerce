import cartPage from '../page_objects/cartPage';
import desktopsPage from '../page_objects/desktopsPage';
import homepage, { closeBannerBtn } from '../page_objects/homepage';
import loginPage from '../page_objects/loginPage';
import productPage from '../page_objects/productPage';
import registerPage from '../page_objects/registerPage';
import 'cypress-real-events/support';

Cypress.Commands.add('registerForm', () => {
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
});

Cypress.Commands.add('removeProductFromCart', () => {
  homepage.closeBannerBtn().click();
  homepage.cartBtn().click();
  cartPage.removeBtn().realClick();
});

Cypress.Commands.add('takingCommunityPoll', () => {
  cy.visit('https://demo.nopcommerce.com/');
  homepage.excellentPollBtn().click();
  homepage.voteBtn().click();
});
