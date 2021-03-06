//intellisense do cypress
/// <reference types = "Cypress" />

//Importar ações:
import Catalogo from '../support/page/catalogo'

context('Desafio NEXT', () => {

    //========================================================================
    //Adicionar uma verificação para ignorar erros não capturados no Cypress 
    //Ref. https://github.com/cypress-io/cypress/issues/2554
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
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
    it('Mostrar valor do produto', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.validarValorProduto();
    });

    //========================================================================
    it('Adicionar um produto à sacola', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.clicarAdicionarSacola();
        Catalogo.visualizarQtdVsPrecoProduto();
    });

    it.only('Adicionar n quantidades de produtos à Sacola', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.clicarAdicionarSacola();
        var qtd = 5
        Catalogo.adicionarProdutoNaSacola(qtd);

    });

    //========================================================================
    it('Calcular a qtd x valor', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.clicarAdicionarSacola();
        var qtd = 5
        Catalogo.adicionarProdutoNaSacola(qtd);
        Catalogo.calcularQtsVsPrecoProduto();
    });

    //========================================================================
    it('Remover um produto da Sacola ', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.clicarAdicionarSacola();
        var qtd = 5
        Catalogo.adicionarProdutoNaSacola(qtd);
        Catalogo.removerUmProdutoDaSacola();
    });

    //========================================================================
    it('Remover todos os produtos da Sacola', () => {
        Catalogo.consultarComEnter();
        Catalogo.mostrarDetalheProduto();
        Catalogo.clicarAdicionarSacola();
        var qtd = 5
        Catalogo.adicionarProdutoNaSacola(qtd);
        Catalogo.removerTodosProdutoDaSacola();
    });

});