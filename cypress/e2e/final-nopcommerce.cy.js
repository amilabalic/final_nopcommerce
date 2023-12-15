import homepage from '../page_objects/homepage';
import registerPage from '../page_objects/registerPage';
import regCompletePage from '../page_objects/regCompletePage';
import loginPage from '../page_objects/loginPage';

describe('final_nopcommerce', () => {
  it('Add and remove product from the cart', () => {
    cy.addProductToCart();
    cy.estimateShipping();
    cy.removeProductFromCart();
  });
  it('Add gift card to cart', () => {
    cy.addGiftCardToCart();
  });
  it('Add and remove product from the comparison list', () => {
    cy.addProductToCompareList();
    cy.removeProductFromTheCompareList();
  });

  it('Taking community poll with logged in user', () => {
    cy.takingCommunityPoll();
  });

  it('Search Apple iCam', () => {
    cy.search();
  });
});
