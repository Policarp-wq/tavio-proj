/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>;
  }
}

Cypress.Commands.add('login', () => {
    cy.intercept(`**/api/login`, {
        "id": "u1",
        "login": "alice",
        "name": "Alice Smith",
        "phone": "1111111111",
        "rating": 4.8,
        "registerDate": "2023-01-10",
        "iconUrl": "https://static.wikia.nocookie.net/deltatraveler/images/f/fb/Ralsei.png"
    }
    ).as('loginRequest');

  cy.visit('/login');
  cy.get('input[name="login"]').type('random@random.ru');
  cy.get('input[name="password"]').type('randomrandomiwrejs[g9i4398ru0[39u0-283yu4=09rj04593uy8u2j923g-ujkpo');
  cy.contains('Подтвердить').click();
  cy.wait('@loginRequest');
});