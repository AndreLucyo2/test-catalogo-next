
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

}

export default new Catalogo();