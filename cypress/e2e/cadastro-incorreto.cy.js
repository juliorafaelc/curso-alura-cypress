describe('Pagina de cadastro', () => {

  beforeEach(() => {
    cy.entrarSite();
  })
  
  it('garantir que as mensagens de erro na pagina de cadastro estejam funcionando', () => {
    cy.paginaDeCadastro();
    cy.get('[data-test="btnRegister"]').click();
    cy.get('[data-test="btnRegister"]').click();
    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })
})