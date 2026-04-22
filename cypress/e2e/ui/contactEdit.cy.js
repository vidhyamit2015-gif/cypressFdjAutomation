describe('contact edit', () => {
  it('should edit address details of an existing contact', () => {
    cy.fixture('contact').then((data) => {
      const unique = Date.now()

      const user = {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: `vidh${unique}@gmail.com`,
        password: data.user.password
      }

      const contact = {
        firstName: data.contact.firstName,
        lastName: data.contact.lastName,
        birthdate: data.contact.birthdate,
        email: `vidhya${unique}@mail.com`,
        phone: data.contact.phone,
        street1: data.contact.street1,
        city: data.contact.city,
        postalCode: data.contact.postalCode,
        stateProvince: data.contact.stateProvince,
        country: data.contact.country
      }

      cy.signup(user)
      cy.url().should('include', '/contactList')

      cy.addContact(contact)
      cy.url().should('include', '/contactList')

      cy.contains(contact.email).should('be.visible')

      cy.openContactByEmail(contact.email)
      cy.url().should('include', '/contactDetails')

      cy.editContactAddress(data.updatedAddress)

      cy.contains(data.updatedAddress.street1).should('be.visible')
      cy.contains(data.updatedAddress.city).should('be.visible')
      cy.contains(data.updatedAddress.postalCode).should('be.visible')
      cy.contains(data.updatedAddress.stateProvince).should('be.visible')
      cy.contains(data.updatedAddress.country).should('be.visible')
    })
  })
})