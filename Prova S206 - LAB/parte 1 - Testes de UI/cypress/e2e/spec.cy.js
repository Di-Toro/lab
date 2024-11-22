function realizarLogin(username, password) {
  cy.get('#login2').click()
  cy.get('#loginusername').should('be.visible').type(username)
  cy.get('#loginpassword').should('be.visible').type(password)
  cy.get('button').contains('Log in').click()
}

describe('Suite de Testes - DemoBlaze -', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
  })

  it('Deve fazer login com sucesso (positivo)', () => {
    realizarLogin('demo', 'demo')
    
    // Seo nome aparece na barra de navegação
    cy.get('#nameofuser').should('contain', 'Welcome demo')
  })

  it('Deve navegar para a página de um produto específico (positivo)', () => {
    cy.get('.card-title').contains('Samsung galaxy s6').click()
    
    // Se o título do produto tá na tela
    cy.get('.name').should('be.visible').and('contain', 'Samsung galaxy s6')
  })

  it('Não deve permitir login com credenciais inválidas (negativo)', () => {
    realizarLogin('usuario_invalido', 'senha_errada')
    
    // Se nenhum user aparece logado
    cy.get('#nameofuser').should('not.be.visible')
    
    // Se uma mensagem de erro aparece
    cy.on('window:alert', (text) => {
      expect(text).to.contain('User does not exist.')
    })
  })
})
