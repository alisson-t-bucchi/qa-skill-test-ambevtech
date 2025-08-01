describe('Cadastro de usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/users',
      body: {
        nome: 'Alisson Teste',
        email: `alisson${Date.now()}@teste.com`,
        password: '123456',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })
})