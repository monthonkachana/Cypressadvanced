/// <reference types="cypress" />

it('Intercept requests', () => {
  //intercept = Spy and stub network req and res
  cy
    .intercept({
      method: 'POST',
      url: '/api/boards'
    }).as('createBoard')
//as. = To create an alias
  cy
    .visit('/')

  cy
    .get('[data-cy=create-board]')
    .click()

  cy
    .get('[data-cy=new-board-input]')
    .type('launching a rocket{enter}')
  // intercepted http req  can be wait for
  cy
  //To use .wait() command with an alias  => @
    .wait('@createBoard')
    .then((board) => {
      expect(board.response.statusCode).to.eq(201)
      expect(board.request.body.name).to.eq('launching a rocket')
    })
  //intercept the command and use .wait() to make our test wait for that command to happen
});