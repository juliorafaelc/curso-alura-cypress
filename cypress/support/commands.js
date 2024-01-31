
Cypress.Commands.add('entrarSite', () => {
  cy.visit('http://localhost:4200/#/home');
  cy.url().should('eq', 'http://localhost:4200/#/home');
})

Cypress.Commands.add('login', (user, senha) => {
  cy.get('[data-test="loginUserName"]').type(user);
  cy.get('[data-test="loginPassword"]').type(senha);
  cy.get('[data-test="loginBtn"]').click();
})

Cypress.Commands.add('paginaDeCadastro',() => {
  cy.entrarSite()
  cy.get('[data-test="register"]').click();
})

Cypress.Commands.add('gerarCadastro',(email, fullname, username, password) => {
  cy.get('[data-test="email"]').type(email);
  cy.get('[data-test="fullName"]').type(fullname);
  cy.intercept('/user/exists/**').as('userExists');
  cy.get('[data-test="registerUserName"]').type(username);
  cy.get('[data-test="registerPassword"]').type(password);
  cy.wait('@userExists');
  cy.get('[data-test="btnRegister"]').click();
})