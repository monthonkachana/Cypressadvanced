/// <reference types="cypress" />
//Drag and Drop Plugin install
// https://github.com/4teamwork/cypress-drag-drop


it('The drag command', () => {

  cy
    .visit('/board/43445021635');
  cy
    .get('[data-cy=list-name]')
    .eq(0)
    .as('task1')


  cy
    .get('[data-cy=list-name]')
    .eq(1)
    .as('task2')

  cy
    .get('@task2')
    .drag('@task1')
});
it('cypress-file-upload', () => {

  cy
    .visit('/board/43445021635');
  cy
    .get('[data-cy=task]')
    .eq(0)
    .click()
  cy
    .get('.dropzone-custom-content')
    .attachFile('logo.png', { subjectType: 'drag-n-drop' })

});
//Cypress Real Events Plugin Cypress does, for example click or type, it does that using JavaScript.
// https://github.com/dmtrKovalenko/cypress-real-events
it('Cypress Real Events Plugin', () => {

  cy
    .visit('/');
  cy.get('[data-cy=board-item]')
    .realHover


});