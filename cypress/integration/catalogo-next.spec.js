//intelesence do cypress
/// <reference types = "Cypress" />

context('Desafio NEXT', () => {

    //========================================================================
    before(() => {

        //Intersepta a requisição da consulta e dar um apelido
        cy.intercept(
            'GET',
            '**?q=Capa Celular S20 Clonado**'
        ).as('getBuscaResult')

        cy.log('## Acessando pagina')
        cy.visit('https://meucomercio.com.br/lojaqualificacao');

    });

    //========================================================================
    it('Bdd - Acessar a pagina', () => {
        cy.get('.list-product__items__wrapper').should('be.visible');
    });

    //========================================================================
    it('Bdd - Consultar clicando Enter', () => {

        cy.get('.search-bar__input')                  //encontra o elemento
            .should('be.visible')                     //valida se esta visivel
            .type('Capa Celular S20 Clonado{enter}')  //faz uma busca com Enter

    });

    //========================================================================
    it.only('Bdd - Consultar clicando na lupa', () => {

        cy.get('.search-bar__input')                  //encontra o elemento
            .should('be.visible')                     //valida se esta visivel
            .type('Capa Celular')                     //faz uma busca

        cy.get('.nex-icon-search')                    //encontra o elemento
            .should('be.visible')                     //valida se esta visivel
            .click()                                  //manda um click

        cy.wait('@getBuscaResult')
    });




});