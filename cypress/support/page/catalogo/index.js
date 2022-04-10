
const url = Cypress.config("baseUrl")
const elements = require('./elements').ELEMENTS;

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

}

export default new Catalogo();