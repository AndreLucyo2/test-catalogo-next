//intelesence do cypress
/// <reference types = "Cypress" />

//Importa as funções do arquivo utils.js
//import { format } from '../support/utils'

//Importar ações:
import Catalogo from '../support/page/catalogo'

context('Desafio NEXT', () => {

    //========================================================================
    //Adicionar uma verificação para ignorar erros não capturados no Cypress 
    //Ref. https://github.com/cypress-io/cypress/issues/2554
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    //========================================================================
    before(() => {
        Catalogo.acessarPagina();
    });

    //========================================================================
    it('Mostrar lista de produtos', () => {
        Catalogo.mostrarListaProduto();
    });

    //========================================================================
    it('Consultar clicando Enter', () => {
        Catalogo.consultarComEnter();
    });

    //========================================================================
    it('Mostrar detalhes do produto', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
    });

    //========================================================================
    it('Mostrar valor do produto maior que zero', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.obterValorProduto();
    });

    //========================================================================
    it.only('Adicionar um produto à sacola', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.clicarAdicionarSacola();
        Catalogo.visualizarQtdVsPrecoProduto();
    });

    //========================================================================
    it('Calcular a qtd x valor', () => {

        // var qtdProduto = 0
        // let valorProduto = 0
        // let valorSacola = 0

        // cy.log('## Consultar clicando Enter')
        // cy.get('.search-bar__input, [type=search]')
        //     //.wait(10000)
        //     .should('be.visible')
        //     .type('Capa Celular S20 Clonado{enter}')

        // cy.log('## Mostrar detalhes')
        // cy.get('.img,[alt=" Capa Celular S20 Clonado"]').click()
        // cy.get('.product-detail__content__info').should('be.visible')

        // cy.log('## Obter valor do produto')
        // cy.get('.product-detail__content__info__price')
        //     .children()
        //     .should('be.visible')
        //     .invoke('text').then(text => {
        //         cy.log(text)
        //         valorProduto = format(text)
        //         cy.log('Valor Prod.:' + valorProduto)
        //     })

        // cy.log('## Clicar no botão Adicionar à sacola')
        // cy.get('.button, ui circular secondary button nex-btn nex-btn-primary product-detail__content__info__add-cart')
        //     .should('be.visible')
        //     .contains('Adicionar à sacola')
        //     .click()

        // cy.log('## Coferir qtd x valor')
        // cy.get('.div, .product-detail__content__info__counter-wrapper__price_qtd')
        //     .should('be.visible')
        //     .invoke('text').then(texto => {

        //         var posCaractIgual = 0

        //         if (texto.indexOf('=') !== -1) {
        //             posCaractIgual = texto.indexOf('=')
        //             qtdProduto = texto.substring(0, posCaractIgual - 1)
        //             valorSacola = format(texto.substring(posCaractIgual + 1, (texto.length - posCaractIgual + 1)))
        //         }

        //         cy.log(`Texto completo: ${texto}`)
        //         cy.log(`NumCaract:${texto.length}`)
        //         cy.log(`Pos "=":${posCaractIgual}`)

        //         cy.log(`Qtd: ${qtdProduto}`)
        //         cy.log(`Val. Produto: ${valorProduto}`)
        //         cy.log(`Val. Sacola: ${valorSacola}`)

        //         expect(valorProduto * qtdProduto).to.be.eq(valorSacola)

        //     })

    });

});