describe('Cadastro de produto', () => {
  it('Deve cadastrar produto com token de admin', () => {
    cy.request('POST', 'https://serverest.dev/login', {
      email: 'fulano@qa.com',
      password: 'teste'
    }).then((loginRes) => {
      const token = loginRes.body.authorization

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos',
        headers: { authorization: token },
        body: {
          nome: 'Auriculares Samsung',
          preco: 1100.00,
          descricao: 'Produto de otima qualidade',
          quantidade: 52
        }
      }).then((prodRes) => {
        expect(prodRes.status).to.eq(201)
        expect(prodRes.body.message).to.eq('Cadastro realizado com sucesso')
      })
    })
  })
})