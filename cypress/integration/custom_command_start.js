/// <reference types="cypress" />

// beforeEach(() => {
//   cy.request('POST', '/api/reset')
// })

// -----------------------------------------------------------

// type addBoard add command fodel typescript command.d.ts
//1.
// Cypress.Commands.add('take', { prevSubject: true }, (input) => {
//   cy
//     .get(`[data-cy=${input}]`)
// })
//2.
Cypress.Commands.add('take', { prevSubject: 'optional' }, (subject, input) => {

  if (subject) {

    cy
      .wrap(subject)
      .find(`[data-cy=${input}]`)

  } else {

    cy
      .get(`[data-cy=${input}]`)

  }

})

it('Custom commands is a child', () => {

  cy
    .visit('/');
  //take command is a child command or a parent command
  cy.take('create-board')

});
it('Custom take commands', () => {

  cy
    .visit('/board/43445021635');

  cy
    .take('list')
    .eq(0)
    .take('list-name')

});
it.only('Custom commands', () => {

  cy
    .visit('/board/52346448600');

  cy
    .take('list')
    .eq(0)
    .take('list-name')

});