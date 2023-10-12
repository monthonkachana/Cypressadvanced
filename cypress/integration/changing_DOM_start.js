/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {
  //trigger = event listenners can be trigger commads
  //invoke = function. We can reveal hidden elements or change different attributes
  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover')

  cy
    .get('[data-cy=star]')
    .should('be.visible')

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseout')

  cy
    .get('[data-cy=star]')
    .should('not.be.visible')

})