describe('Navigation', () => {
  it('should return to contact list from contact details page', () => {
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
      cy.addContact(contact)

      cy.openContactByEmail(contact.email)
      cy.url().should('include', '/contactDetails')

      cy.returnToContactList()
      cy.url().should('include', '/contactList')
      cy.contains(contact.email).should('be.visible')
    })
  })
})