/// <reference types="cypress" />
describe('filtering', () => {

    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        
        cy.get('.new-todo').type("learn cypress{enter}")
        cy.get('.new-todo').type("break{enter}")
        cy.get('.new-todo').type("weekly bug review{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })
    it('should filter active todo', () => {
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length', 2)
    })
    it('should filter active todo', () => {
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })
    it('should filter active todo', () => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)
    })

})