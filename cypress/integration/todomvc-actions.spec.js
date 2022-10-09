/// <reference types="cypress" />
describe('todo activites', () =>{
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        
        cy.get('.new-todo',{timeout: 6000}).type("learn cypress{enter}")

    })
    it('should add a new todo to the list', () => {
        cy.get('label').should('have.text', 'learn cypress')   
        cy.get('.toggle').should('not.be.checked')
    })
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    it('should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.get('.clear-completed').click()
        cy.get('.todo-list').should('not.have.descendants','li')
        
    })

})
