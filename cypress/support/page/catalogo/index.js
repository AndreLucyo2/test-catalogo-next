
import { format } from '../../utils';
const url = Cypress.config("baseUrl")
const elements = require('./elements').ELEMENTS;

//Texto de pesquisa:
const txtPesquisa = 'Capa Celular S20 Clonado'

//Ações na pagina
class Catalogo {

    acessarPagina() {
        cy.log('## Acessando pagina')
        cy.visit(url);
    }

    mostrarListaProduto() {
        cy.log('## Mostrar lista de produtos')
        cy.get(elements.lsProduto).should('be.visible');
    }

    consultarComEnter() {
        cy.log('## Consultar clicando Enter')
        cy.get(elements.cpPesquisa)
            .should('be.visible')
            .type(`${txtPesquisa}{enter}`)
    }

    mostrarDetalheProduto() {
        cy.log('## Mostrar detalhes')
        cy.get(elements.imgProduto).click()
        cy.get(elements.infProduto).should('be.visible')
    }

    obterValorProduto() {

        let valorProduto = 0;
        var isMaior = false;

        cy.log('## Obter valor do produto')
        cy.get(elements.infPrecoProduto)
            .children()
            .should('be.visible')
            .invoke('text').then(text => {
                cy.log(text)
                valorProduto = format(text)
                cy.log(`Valor Prod.:${valorProduto}`)

                if (valorProduto > 0) {
                    isMaior = true
                    cy.log(isMaior)
                }

                cy.log(`É Maior que zero? ${isMaior}`)
                expect(isMaior).to.be.eq(true)
            })
    }

    clicarAdicionarSacola() {

        cy.log('## Clicar no botão Adicionar à sacola')
        cy.get(elements.btnAdicionarSacola)
            .should('be.visible')
            .contains('Adicionar à sacola')
            .click()

    }

    visualizarQtdVsPrecoProduto() {
        cy.log('## Mostrar qtd x valor')
        cy.get(elements.infPrecoQtdProduto)
            .should('be.visible')
    }

}

export default new Catalogo();