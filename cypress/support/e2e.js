import './commands';
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';
import homepage from '../page_objects/homepage';
import registerPage from '../page_objects/registerPage';
import regCompletePage from '../page_objects/regCompletePage';
import loginPage from '../page_objects/loginPage';

beforeEach(() => {
  cy.visit('https://demo.nopcommerce.com/');
  cy.wrap(faker.person.firstName()).as('firstName');
  cy.wrap(faker.person.lastName()).as('lastName');
  cy.get('@firstName').then((firstName) => {
    cy.get('@lastName').then((lastName) => {
      cy.wrap(firstName + '.' + lastName + '@yopmail.com').as('email');
    });
  });

  homepage.registerBtn().click();
  cy.registerForm();
  registerPage.registerBtn().click();
  regCompletePage.continueBtn().click();

  homepage.loginBtn().click();
  cy.loginForm();
  loginPage.loginBtn().click();
  cy.get('.ico-logout').should('have.text', 'Log out');
});
