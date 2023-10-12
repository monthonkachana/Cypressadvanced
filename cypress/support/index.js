// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.Cookies.defaults({
    //argument in this function, we are going to type preserve   
    preserve: 'trello_token'
})
// import '@applitools/eyes-cypress/commands'


// Import commands.js using ES2015 syntax:
import './commands'
// module.exports = (on, config) => {

// }
// require('@applitools/eyes-cypress')(module)


//pluging drag-drop & file-upload
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
import "cypress-real-events/support";

// Alternatively you can use CommonJS syntax:
// require('./commands')
