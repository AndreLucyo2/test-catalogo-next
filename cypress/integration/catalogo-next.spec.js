//intelesence do cypress
/// <reference types = "Cypress" />

context('Desafio NEXT', () => {

    it('Bdd1 - Acessando pagina', () => {

        cy.visit('https://meucomercio.com.br/lojaqualificacao')

        cy.get('.list-product__items__wrapper').should('exist')

    });

});