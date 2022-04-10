//intelesence do cypress
/// <reference types = "Cypress" />

//Importa as funções do arquivo utils.js
import { format } from '../support/utils'

//Importar acções:
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
    it.only('Mostrar lista de produtos', () => {
        Catalogo.mostrarListaProduto();
    });

    //========================================================================
    it('Consultar clicando Enter', () => {

        cy.log('## Consultar clicando Enter')
        cy.get('.search-bar__input, [type=search]')   //encontra o elemento
            .should('be.visible')                     //valida se esta visivel
            .type('Capa Celular S20 Clonado{enter}')  //faz uma busca com Enter
    });

    //========================================================================
    // it('Bdd - Consultar clicando na lupa', () => {
    //
    //     cy.log('## Consultar clicando na lupa')
    //     cy.get('.search-bar__input, [type=search]')                  //encontra o elemento
    //         .should('be.visible')                     //valida se esta visivel
    //         .type('Capa Celular')                     //faz uma busca
    //
    //     cy.get('.nex-icon-search')                    //encontra o elemento
    //         .should('be.visible')                     //valida se esta visivel
    //         .click()                                  //manda um click
    //
    //     //cy.wait('@getBuscaResult')
    // });

    //========================================================================
    it('Mostrar detalhes do produto', () => {

        cy.log('## Consultar clicando Enter')
        cy.get('.search-bar__input, [type=search]')
            .should('be.visible')
            .type('Capa Celular S20 Clonado{enter}')

        cy.wait(10000)
        cy.log('## Mostrar detalhes')
        cy.get('.img,[alt=" Capa Celular S20 Clonado"]').click()
        cy.get('.product-detail__content__info')
            .should('be.visible')
    });

    //========================================================================
    it('Mostrar valor do produto maior que zero', () => {

        let valorProduto = 0;
        var isMaior = false;

        cy.log('## Consultar clicando Enter')
        cy.get('.search-bar__input, [type=search]')
            .should('be.visible')
            .type('Capa Celular S20 Clonado{enter}')

        cy.log('## Mostrar detalhes')
        cy.get('.img,[alt=" Capa Celular S20 Clonado"]').click()
        cy.get('.product-detail__content__info')
            .should('be.visible')

        cy.log('## Obter valor do produto')
        cy.get('.product-detail__content__info__price')
            .children()
            //.should('be.visible')
            .invoke('text').then(text => {
                cy.log(text)
                valorProduto = format(text)
                cy.log('Valor Prod.:' + valorProduto)

                if (valorProduto > 0) {
                    isMaior = true
                    cy.log(isMaior)
                }

                cy.log('É Maior que zero: ' + isMaior)
                expect(isMaior).to.be.eq(true)
            })
    });

    //========================================================================
    it('Adicionar um produto à sacola', () => {

        var qtdProduto = 0
        let valorProduto = 0
        let valorSacola = 0

        cy.log('## Consultar clicando Enter')
        cy.get('.search-bar__input, [type=search]')
            .should('be.visible')
            .type('Capa Celular S20 Clonado{enter}')

        cy.log('## Mostrar detalhes')
        cy.get('.img,[alt=" Capa Celular S20 Clonado"]').click()
        cy.get('.product-detail__content__info')
            .should('be.visible')

        cy.log('## Clicar no botão Adicionar à sacola')
        cy.get('.button, ui circular secondary button nex-btn nex-btn-primary product-detail__content__info__add-cart')
            .should('be.visible')
            .contains('Adicionar à sacola')
            .click()

        cy.log('## Mostrar qtd x valor')
        cy.get('.div, .product-detail__content__info__counter-wrapper__price_qtd')
            .should('be.visible')
    });

    //========================================================================
    it.only('Calcular a qtd x valor', () => {

        var qtdProduto = 0
        let valorProduto = 0
        let valorSacola = 0

        cy.log('## Consultar clicando Enter')
        cy.get('.search-bar__input, [type=search]')
            //.wait(10000)
            .should('be.visible')
            .type('Capa Celular S20 Clonado{enter}')

        cy.log('## Mostrar detalhes')
        cy.get('.img,[alt=" Capa Celular S20 Clonado"]').click()
        cy.get('.product-detail__content__info').should('be.visible')

        cy.log('## Obter valor do produto')
        cy.get('.product-detail__content__info__price')
            .children()
            .should('be.visible')
            .invoke('text').then(text => {
                cy.log(text)
                valorProduto = format(text)
                cy.log('Valor Prod.:' + valorProduto)
            })

        cy.log('## Clicar no botão Adicionar à sacola')
        cy.get('.button, ui circular secondary button nex-btn nex-btn-primary product-detail__content__info__add-cart')
            .should('be.visible')
            .contains('Adicionar à sacola')
            .click()

        cy.log('## Coferir qtd x valor')
        cy.get('.div, .product-detail__content__info__counter-wrapper__price_qtd')
            .should('be.visible')
            .invoke('text').then(texto => {

                var posCaractIgual = 0

                if (texto.indexOf('=') !== -1) {
                    posCaractIgual = texto.indexOf('=')
                    qtdProduto = texto.substring(0, posCaractIgual - 1)
                    valorSacola = format(texto.substring(posCaractIgual + 1, (texto.length - posCaractIgual + 1)))
                }

                cy.log(`Texto completo: ${texto}`)
                cy.log(`NumCaract:${texto.length}`)
                cy.log(`Pos "=":${posCaractIgual}`)

                cy.log(`Qtd: ${qtdProduto}`)
                cy.log(`Val. Produto: ${valorProduto}`)
                cy.log(`Val. Sacola: ${valorSacola}`)

                expect(valorProduto * qtdProduto).to.be.eq(valorSacola)

            })

    });

});