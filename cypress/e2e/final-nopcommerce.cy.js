import homepage from '../page_objects/homepage';
import registerPage from '../page_objects/registerPage';
import regCompletePage from '../page_objects/regCompletePage';
import loginPage from '../page_objects/loginPage';

describe('final_nopcommerce', () => {
  it('Add and remove product from the cart', () => {
    /* homepage.registerBtn().click();
    cy.registerForm();
    registerPage.registerBtn().click();
    regCompletePage.continueBtn().click();

    homepage.loginBtn().click();
    cy.loginForm();
    loginPage.loginBtn().click();
    cy.get('.ico-logout').should('have.text', 'Log out');*/

    cy.addProductToCart();

    cy.removeProductFromCart();
  });

  it('Add and remove product from the comparison list', () => {
    cy.addProductToCompareList();
    cy.removeProductFromTheCompareList();
  });

  it('Taking community poll with logged in user', () => {
    cy.takingCommunityPoll();
  });
});
