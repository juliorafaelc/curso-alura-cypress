describe('Pagina de login', () => {

  beforeEach(() => {
    cy.entrarSite();
  })

  it('Verificar mensagem de campos obrigatorios', () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Verificar login incorreto', () => {
    cy.login(123, 123);
    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 401
    })
  })
})