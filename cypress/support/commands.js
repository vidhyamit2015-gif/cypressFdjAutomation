import { selectors } from "./selectors"

Cypress.Commands.add('signup', (user) => {
  cy.visit('/')
  cy.get(selectors.auth.signupBtn).click()
  cy.get(selectors.auth.firstName).type(user.firstName)
  cy.get(selectors.auth.lastName).type(user.lastName)
  cy.get(selectors.auth.email).type(user.email)
  cy.get(selectors.auth.password).type(user.password)
  cy.get(selectors.auth.submit).click()
})

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')
  cy.get(selectors.auth.email).type(email)
  cy.get(selectors.auth.password).type(password)
  cy.get(selectors.auth.submit).click()
})

Cypress.Commands.add('logout', () => {
  cy.get(selectors.auth.logout).click()
})

Cypress.Commands.add('addContact', (contact) => {
  cy.get(selectors.contact.addContactBtn).click()
  cy.url().should('include', '/addContact')

  cy.get(selectors.contactForm.firstName).type(contact.firstName)
  cy.get(selectors.contactForm.lastName).type(contact.lastName)
  cy.get(selectors.contactForm.birthdate).type(contact.birthdate)
  cy.get(selectors.contactForm.email).type(contact.email)
  cy.get(selectors.contactForm.phone).type(contact.phone)
  cy.get(selectors.contactForm.street).type(contact.street1)
  cy.get(selectors.contactForm.city).type(contact.city)
  cy.get(selectors.contactForm.postalCode).type(contact.postalCode)
  cy.get(selectors.contactForm.state).type(contact.stateProvince)
  cy.get(selectors.contactForm.country).type(contact.country)
  cy.get(selectors.contactForm.submit).click()
})

Cypress.Commands.add('openContactByEmail', (email) => {
  cy.contains(selectors.contact.tableCell, email)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('editContactAddress', (address) => {
  cy.get(selectors.contact.editBtn).click()
  cy.get(selectors.contactForm.street).clear().type(address.street1)
  cy.get(selectors.contactForm.city).clear().type(address.city)
  cy.get(selectors.contactForm.postalCode).clear().type(address.postalCode)
  cy.get(selectors.contactForm.state).clear().type(address.stateProvince)
  cy.get(selectors.contactForm.country).clear().type(address.country)
  cy.get(selectors.contactForm.submit).click()
})

Cypress.Commands.add('deleteContact', () => {
  cy.window().then((win) => {
    cy.stub(win, 'confirm').returns(true)
  })
  cy.get(selectors.contact.deleteBtn).click()
})

Cypress.Commands.add('returnToContactList', () => {
  cy.get(selectors.contact.returnBtn).click()
})


Cypress.Commands.add('getPokemon', (id) => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/pokemon/${id}`
  })
})

Cypress.Commands.add('getPokemonList', () => {
  return cy.request({
    method: 'GET',
    url:`${Cypress.env('apiBaseUrl')}/pokemon`
  })
})

Cypress.Commands.add('getPokemonInvalid', (id) => {
  return cy.request({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('validateErrorMsgLogin', () => {
  cy.get(selectors.auth.error)
    .should('be.visible')
    .and('contain', 'Incorrect username or password')
})