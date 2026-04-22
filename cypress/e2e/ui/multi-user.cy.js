describe('Multi-user signup and login', () => {
  it('should create 5 users and login with each of them successfully', () => {
    cy.fixture('multiUser').then((data) => {
      const timestamp = Date.now()

      const testUsers = data.users.map((user, index) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: `multiuser${timestamp}${index + 1}@gmail.com`,
        password: data.password
      }))

      testUsers.forEach((user) => {
        cy.log(`Signing up user: ${user.email}`)

        cy.signup(user)
        cy.url().should('include', '/contactList')

        cy.logout()

        cy.log(`Logging in user: ${user.email}`)

        cy.login(user.email, user.password)
        cy.url().should('include', '/contactList')

        cy.logout()
      })
    })
  })
})