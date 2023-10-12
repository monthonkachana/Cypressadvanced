/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/14074159013')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy="task"]')
    .then(item => {
      if (item.length !== 4) {
        throw new Error('Not enough elements')
      }
      expect(item[0]).to.contain.text('milk')
      expect(item[1]).to.contain.text('a1')
      expect(item[2]).to.contain.text('a2')
      expect(item[3]).to.contain.text('max')
    })

})