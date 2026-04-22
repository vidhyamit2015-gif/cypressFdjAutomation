// ***********************************************************
// This example support/e2e.js is processed and
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

// Import commands.js using ES2015 syntax:
import './commands'

import chaiJsonSchema from 'chai-json-schema'

chai.use(chaiJsonSchema)

beforeEach(() => {
  cy.env(['viewportProfile']).then(({ viewportProfile }) => {
    const profile = viewportProfile || 'desktop'

    if (profile === 'mobile') {
      cy.viewport(375, 667)
    } else if (profile === 'desktop') {
      cy.viewport(1280, 800)
    } else {
      throw new Error(`Unknown viewportProfile: ${profile}`)
    }
  })
})