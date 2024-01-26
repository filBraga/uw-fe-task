/// <reference types="cypress" />

describe('tax app app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should display validation errors for incorrect inputs', () => {
        cy.get('#name').type('Fi');
        cy.get('#tax').type('123');
        cy.get('button').contains('Submit').click();
        cy.contains('Minimum name length: 3 characters');
        cy.contains('Please select a country');
        cy.contains('Invalid Tax ID for selected country');
    });

    it('should submit the form with correct data', () => {
        cy.get('#name').type('John Doe');
        cy.get('[id="country-select"]').click();
        cy.get('[data-option-index="0"]').click();
        cy.get('#tax').type('1');
        cy.get('button').contains('Submit').click();
        cy.contains('Success!');
    });
});
