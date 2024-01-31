describe('Testes de API na alurapic', () => {
  it('dar um post de acesso não autorizado', () => {
    cy.request({
      failOnStatusCode: false,
      method:'POST',
      url: 'http://localhost:3000/user/login',
      body: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(401)
    })
  })
  it('Fotos do usuário', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/flavio/photos'
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[0]).to.have.property('description')
      expect(res.body[0].description).to.be.equal('rato')

    })
  })
})