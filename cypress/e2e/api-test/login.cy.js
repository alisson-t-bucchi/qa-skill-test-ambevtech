describe('Login de usuário', () => {
  it('Deve realizar login com usuário válido', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
    })
  })
})