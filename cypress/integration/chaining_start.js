/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/14074159013')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .should('be.visible')

});
