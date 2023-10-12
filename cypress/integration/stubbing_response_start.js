/// <reference types="cypress" />

it('Stubbing body fodel fixture', () => {
  // res body stored in the fixtures folder  “threeBoards.json”. 
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards',
    }, {
      fixture: 'threeBoards.json'
    }).as('boardList')
  cy
    .visit('/')


});
it('Stubbing error message network issue ', () => {
  // res body stored in the fixtures folder  “threeBoards.json”. 
  cy
    .intercept({
      method: 'GET',
      url: '/api/boards',
    }, {
      forceNetworkError: true
    }).as('createBoard')
  cy
    .visit('/')


});
it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {

      req.reply((res) => {
        res.body[0].starred = true

        return res
      })
    }).as('boardList')

  cy
    .visit('/')

});