import offers from "../../fixtures/offers.json"
import users from "../../fixtures/users.json"

describe('Test auth', () => {
    beforeEach(() => {
        cy.intercept('**/offers', offers);
    })
    it('User can login', () => {
        cy.visit('/login');
        cy.login();
        cy.location('pathname').should('eq', '/');
        cy.contains('Alice');
    })
});

describe('Test offer interaction', () => {
    beforeEach(() => {
        cy.intercept('**/api/offers', offers);
    })
    it('Offers are shown on the main page', () => {
        cy.visit('/');
        cy.contains('Продажа легкового авто');
    });
    it('User is redirected on login page if not authed', () => {
        cy.intercept('**/api/offers/1', offers[0]);
        cy.intercept('**/api/users/u1', users[0]);
        cy.visit('/');
        cy.contains('Авторизоваться')
        cy.contains('Продажа легкового авто').closest('li').click();
        cy.contains('850000');
        cy.contains('Купить').click();
        cy.location('pathname').should('eq', '/login');
    })
})