function getDataHoraFormatada() {
  
  var dataHoraAtual = new Date();
  var dia = dataHoraAtual.getDate().toString().padStart(2, '0');
  var mes = (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0');
  var ano = dataHoraAtual.getFullYear();
  var horas = dataHoraAtual.getHours().toString().padStart(2, '0');
  var minutos = dataHoraAtual.getMinutes().toString().padStart(2, '0');
  var segundos = dataHoraAtual.getSeconds().toString().padStart(2, '0');

  return `${dia}${mes}${ano}${horas}${minutos}${segundos}`;
}

var dataHoraFormatada = getDataHoraFormatada();
var emailMassaDeDados = `${dataHoraFormatada}@email.com`;
var nomeMassaDeDados = `${dataHoraFormatada}`;
  
beforeEach(() => {
  cy.entrarSite();
})

describe('Pagina de cadastro', () => {
  it('preencher os campos do formulario para cadastrar novos usuarios', () => {
    cy.paginaDeCadastro();
    cy.gerarCadastro(emailMassaDeDados, nomeMassaDeDados, nomeMassaDeDados, '12345678');
  })

  it('fazer login em uma conta recem cadastrada', () => {
    cy.login(nomeMassaDeDados, '12345678');
    cy.url().should('eq', 'http://localhost:4200/#/user/' + nomeMassaDeDados);
  })
})