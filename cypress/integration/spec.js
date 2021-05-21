/// <reference types="cypress" />
describe('page', () => {
  it('breaks on cors', () => {
    cy.visit('/')
    cy.get('#cors').click()
    cy.location('href').should('contain','cors')
  })

  it('should work', () => {
    cy.visit('/')
    cy.get('#works').click()
    cy.location('href').should('contain','works')
  })
})
