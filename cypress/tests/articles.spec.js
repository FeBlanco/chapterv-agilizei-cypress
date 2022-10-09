/// <reference types="cypress"/>

import article from '../support/pages/articles'

describe('Articles', () => {
  // HOOK -> trechos que devem ser executados antes ou depois do testes
  beforeEach(() => {
    // Arrange
    cy.login()
    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    // Fluxo de criação de cadastro
    // Acesso ao formulário (Act)
    article.acessarOFormulario()

    // Preencher o formulário (Act)
    article.preencherFormulario()

    // Submeter o formulário (Act)
    article.submeterFormulario()

    // Verificar se o artigo foi criado (Assert)
    article.verificarSeOArtigoFoiCriado()
  })
})

// AAA -> Arrange, Act, Assert
// Preparar, Executar/Agir, Validar
