/// <reference types="cypress"/>

describe("Registrasi", () => {

  beforeEach(() => {
    cy.visit('https://developer.thebigbox.id/')
    cy.get('[class="btn theme_btn button_hover button-radius mt-3"]').click()
    cy.get('[class="v-btn__content"]').contains('Dont have an account').click()
  });

  it('Field "Fullname" dikosongkan', () => {
    cy.get('#input-73').clear().type('ABC123') //Username
    cy.get('#input-77').clear().type('ABC123@ABC.COM') //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('.v-card__actions > button.v-btn > .v-btn__content').click()
    cy.get(':nth-child(1) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'Fullname is required')
  });

  it('Field "Username" dikosongkan', () => {
    cy.get('#input-69').clear().type('ABC') //Fullname
    cy.get('#input-73').clear() //Username 
    cy.get('#input-77').clear().type('ABC123@ABC.COM') //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()
    cy.get(':nth-child(2) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'Username is required')

  });

  it('Field "Username" diisi kurang dari 6 karakter', () => {
    cy.get('#input-69').clear().type('ABC') //Fullname
    cy.get('#input-73').clear().type('ABC') //Username 
    cy.get('#input-77').clear().type('ABC123@ABC.COM') //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()
    cy.get(':nth-child(2) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'username should be between 6-15 characters; only contain letters, numbers, and underscore; and should not start with underscore')

  });

  it('Field "Username" diisi underscore "_" di karakter pertama', () => {
    cy.get('#input-69').clear().type('ABC') //Fullname
    cy.get('#input-73').clear().type('_ABC123') //Username 
    cy.get('#input-77').clear().type('ABC123@ABC.COM') //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()
    cy.get(':nth-child(2) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'username should be between 6-15 characters; only contain letters, numbers, and underscore; and should not start with underscore')

  });

  it('Field "Email" dikosongkan', () => {
    cy.get('#input-69').clear().type('ABC') //Fullname
    cy.get('#input-73').clear().type('ABC123') //Username 
    cy.get('#input-77').clear() //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()
    cy.get(':nth-child(3) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'E-mail is required')

  });

  it('Field "Password" dikosongkan', () => {
    cy.get('#input-69').clear().type('ABC') //Fullname
    cy.get('#input-73').clear().type('ABC123') //Username 
    cy.get('#input-77').clear().type('ABC123@ABC.COM') //Email
    cy.get('#password').clear() //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()
    cy.get(':nth-child(4) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'Password is required')

  });



  it('Field "Email" tidak diberi domain', () => {
    cy.get('#input-69').clear().type('ABC123') //Fullname
    cy.get('#input-73').clear().type('ABC123') //Username 
    cy.get('#input-77').clear().type('ABC123') //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()
    cy.get(':nth-child(3) > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message').should('contain', 'E-mail must be valid')

  });

  it('Semua field diisi', () => {
    cy.get('#input-69').clear().type('ABC123') //Fullname
    cy.get('#input-73').clear().type('ABC123_') //Username 
    cy.get('#input-77').clear().type('ABC123_@ABC.COM') //Email
    cy.get('#password').clear().type('ABC123') //Password
    cy.get('[class="v-btn__content"]').contains('Register').click()

  });


})