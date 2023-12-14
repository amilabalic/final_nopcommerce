import homepage from '../page_objects/homepage';
import registerPage from '../page_objects/registerPage';
import regCompletePage from '../page_objects/regCompletePage';
import loginPage from '../page_objects/loginPage';

describe('final_nopcommerce', () => {
  it.only('Register', () => {
    homepage.registerBtn().click();
    cy.registerForm();
    registerPage.registerBtn().click();
    regCompletePage.continueBtn().click();

    homepage.loginBtn().click();
    cy.loginForm();
    loginPage.loginBtn().click();
    cy.get('.ico-logout').should('have.text', 'Log out');

    cy.addProductToCart();

    cy.removeProductFromCart();
  });

  it('Taking community poll with logged in user', () => {
    homepage.registerBtn().click();
    cy.registerForm();
    registerPage.registerBtn().click();
    regCompletePage.continueBtn().click();

    homepage.loginBtn().click();
    cy.loginForm();
    loginPage.loginBtn().click();
    cy.get('.ico-logout').should('have.text', 'Log out');

    cy.takingCommunityPoll();
  });
});
