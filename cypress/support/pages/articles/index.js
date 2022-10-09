const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Article {
  // Acesso ao formulário (Act)
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // Preencher o formulário (Act)
  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição do artigo de testes')
    cy.get(el.inputBody).type('Corpo do texto do artigo de testes que está sendo escrito')
    cy.get(el.inputTags).type('cypress')
  }

  // Submeter o formulário (Act)
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  verificarSeOArtigoFoiCriado () {
    // Verificar se o artigo foi criado (Assert)
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Article()
