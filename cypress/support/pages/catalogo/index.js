
const url = Cypress.config("baseUrl")

//Ações na pagina
class Catalogo {

    acessarPagina() {
        cy.log('## Acessando pagina')
        cy.visit(url);
    }

}

export default new Catalogo();