describe('Pagina de login', () => {
  
  beforeEach(() => {
    cy.entrarSite()
  })

  it('fazer login corretamente na pagina da alurapic', () => {
    cy.login('flavio', '123');
    cy.url().should('eq', 'http://localhost:4200/#/user/flavio');
  })
})