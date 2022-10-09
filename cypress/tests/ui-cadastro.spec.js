/// <reference types="cypress"/>

//  hostname = https://api.realworld.io
//  path     = /api/users
//  POST

//  url completa = hostname + path
//  hostname
//  path com query parms
// path sem query params

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: ('cadastro-com-sucesso')
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('Aldo')
    cy.get('[placeholder=Email]').type('belo@mail.com')
    cy.get('[placeholder=Password]').type('pwd123')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: ('cadastro-usuario-existente')
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('zorosola')
    cy.get('[placeholder=Email]').type('zoro@mail.com')
    cy.get('[placeholder=Password]').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })
  it('Cadastro com email já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: ('cadastro-email-existente')
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('nami')
    cy.get('[placeholder=Email]').type('gatuna@gmail.com')
    cy.get('[placeholder=Password]').type('pwd123')

    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
