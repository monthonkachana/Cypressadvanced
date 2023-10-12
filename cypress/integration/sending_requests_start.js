/// <reference types="cypress" />
beforeEach(() => {
  // API to reset 
  cy.request({
    method: 'POST',
    url: '/api/reset'
  })

});
it('Sending requests', () => {

  cy.visit('/')
  // cy.request({
  //   method: 'POST',
  //   url: '/api/boards',
  //   body: {
  //     name: 'h1'
  //   }
  // })
  // cy.request({
  //   method: 'DELETE',
  //   url: '/api/boards/{fix path to delete}',
  // })
});