const { beforeEach } = require("node:test")

describe('pagina de login', () => {
  it('visitar a pagina', () => {
    cy.visit('http://127.0.0.1:5500/index.html?')
  })
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html?')
  
  
  })
  it('senha errada', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('admin');
    cy.get('button').click()
    cy.on('window.alert', (text) =>{
      expect(text).to.contains('Login efetuado com sucesso!')
      })
  })
})