/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {
    //preserve token before set fodel support/index
    Cypress.Cookies.preserveOnce('trello_token')
    cy
      .visit('/')

  })

  it.only('test #1', () => {
    cy
      .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE1OTg5MTkyLCJleHAiOjE2MTU5OTI3OTIsInN1YiI6IjIifQ.c3HqS_RRCJp4IPYvwbUkxWPwBx4VXJa_0ArzKq7qx_M')

    cy
      .reload()

  });
  it('test #2', () => {

  });

});