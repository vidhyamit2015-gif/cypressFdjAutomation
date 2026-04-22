describe('Contact delete', () => {
  it('should sign up, add a contact, open it, and delete it successfully', () => {
    cy.fixture('contact').then((data) => {
      const unique = Date.now()
      const email=`user${unique}@gmail.com`

      const user = {
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email,
        password: data.user.password
      }

      const contact = {
        firstName: data.contact.firstName,
        lastName: data.contact.lastName,
        birthdate: data.contact.birthdate,
        email,
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

      cy.deleteContact()
      cy.url().should('include', '/contactList')
      cy.contains(contact.email).should('not.exist')
    })
  })
})