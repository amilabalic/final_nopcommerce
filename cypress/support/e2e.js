import './commands';
import { faker } from '@faker-js/faker';
import 'cypress-real-events/support';

beforeEach(() => {
  cy.visit('https://demo.nopcommerce.com/');
  cy.wrap(faker.person.firstName()).as('firstName');
  cy.wrap(faker.person.lastName()).as('lastName');
  cy.get('@firstName').then((firstName) => {
    cy.get('@lastName').then((lastName) => {
      cy.wrap(firstName + '.' + lastName + '@yopmail.com').as('email');
    });
  });
});
