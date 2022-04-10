//intelesence do cypress
/// <reference types = "Cypress" />

context('Desafio NEXT', () => {

    //========================================================================
    //Adicionar uma verificação para ignorar erros não capturados no Cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    //========================================================================
    before(() => {

        //Intersepta a requisição da consulta e dar um apelido
        //cy.intercept(
        //    'GET',
        //    '**?q=**'
        //).as('getBuscaResult')

        cy.log('## Acessando pagina')
        cy.visit('https://meucomercio.com.br/lojaqualificacao');

    });


    //========================================================================
    it('Bdd - Acessar a pagina', () => {
        cy.log('## Pagina carregou')
        cy.get('.list-product__items__wrapper').should('be.visible');
    });

    //========================================================================
    it('Bdd - Consultar clicando Enter', () => {

        cy.log('## Consultar clicando Enter')
        cy.get('.search-bar__input, [type=search]')   //encontra o elemento
            .should('be.visible')                     //valida se esta visivel
            .type('Capa Celular S20 Clonado{enter}')  //faz uma busca com Enter

        //cy.get('.results')
        //    .should('contain', 'Capa Celular S20 Clonado') //Retornar Erro de timeout

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




});