/// <reference types="cypress"/>

describe("Login", () => {

  beforeEach(() => {
    cy.visit('https://developer.thebigbox.id/')
    cy.get('[class="btn theme_btn button_hover button-radius mt-3"]').click()
  });

  it('Field "Username or Email" isi nama pengguna dan password kosong', () => {
    cy.get('#input-31').type('ABC123') //Username or Email
    cy.get('#password').click().type('{enter}') //Password
    cy.get('.v-messages__message').should('contain', 'Password is required')
  });

  it('Field "Username or Email" isi Email dan password kosong', () => {
    cy.get('#input-31').type('ABC123@ABC.COM') //Username or Email
    cy.get('#password').click().type('{enter}') //Password
    cy.get('.v-messages__message').should('contain', 'Password is required')
  });

  it('Field "Username or Email" dikosongkan', () => {
    cy.get('#password').type('ABC123') //Password
    cy.get('#input-31').click().type('{enter}') //Username or Email
    cy.get('.v-messages__message').should('contain', 'E-mail or Username is required')
  });

  it('Field "Password" invalid', () => {
    cy.get('#input-31').type('ABC123') //Username or Email
    cy.get('#password').type('ABC1234') //Password
    cy.get('.elevation-12 > :nth-child(2) > button.v-btn > .v-btn__content').click() //Login Button
  });

  it('Semua Field diisi data valid', () => {
    cy.get('#input-31').type('ABC123') //Username or Email
    cy.get('#password').type('ABC123') //Password
    cy.get('.elevation-12 > :nth-child(2) > button.v-btn > .v-btn__content').click() //Login Button
  });





})