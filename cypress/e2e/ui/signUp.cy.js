describe('Authentication', () => {
  it('Verify if it signs up successfully', () => {
    cy.fixture('users').then((data) => {
      const unique = Date.now()

      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: `user_${unique}@gmail.com`,
        password: data.password
      }

      cy.signup(user)
      cy.url().should('include', '/contactList')
    })
  })

  it('Verify if it log in successfully', () => {
    cy.fixture('users').then((data) => {
      const unique = Date.now()
      const email = `user_${unique}@gmail.com`

      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email,
        password: data.password
      }

      cy.signup(user)
      cy.url().should('include', '/contactList')

      cy.logout()

      cy.login(email, data.password)
      cy.url().should('include', '/contactList')
    })
  })

  it('Verify if it throws error for wrong credentials',()=>{
    cy.fixture('users').then((data)=>{
      const unique=Date.now()
      const email=`user_${unique}@gmail.com`

      const user={
        firstName:data.firstName,
        lastName:data.lastName,
        email,
        password:data.password
      }

      cy.signup(user)
      cy.url().should('include', '/contactList')

      cy.logout()

      cy.login(email, 'invalid_password')
      cy.validateErrorMsgLogin()
  

  })

    })
  })

