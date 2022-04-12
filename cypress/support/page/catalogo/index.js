
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
            .type(`${txtPesquisa}{enter}`)
    }

    mostrarDetalheProduto() {
        cy.log('## Mostrar detalhes')
        cy.get(elements.imgProduto).click()
        cy.get(elements.infProduto).should('be.visible')
    }

    validarValorProduto() {
        let valorProduto = 0;
        var isMaior = false;

        cy.log('## Obter valor do produto')
        cy.get(elements.infPrecoProduto)
            .children()
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
            .contains('Adicionar à sacola')
            .click()
    }

    visualizarQtdVsPrecoProduto() {
        cy.log('## Mostrar qtd x valor')
        cy.get(elements.infPrecoQtdProduto)
            .should('be.visible')
    }

    calcularQtsVsPrecoProduto() {
        var qtdProduto = 0
        let valorProduto = 0
        let valorSacola = 0

        cy.log('## Obter valor do produto')
        cy.get(elements.infPrecoProduto)
            .children()
            .invoke('text').then(text => {
                valorProduto = format(text)
                cy.log('Valor Prod.:' + valorProduto)
            })

        cy.log('## Conferir qtd x valor')
        cy.get(elements.infPrecoQtdProduto)
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
    }

    adicionarProdutoNaSacola(numero) {
        for (let index = 0; index < numero; index++) {
            cy.get(elements.containerBtnConter)
                .find(elements.btnPlus)
                .should('be.visible')
                .click()
        }
    }

    removerUmProdutoDaSacola() {
        cy.get(elements.infPrecoQtdProduto)
            .invoke('text').then(texto => {

                var qtdProduto = 0
                var posCaractIgual = 0

                if (texto.indexOf('=') !== -1) {
                    posCaractIgual = texto.indexOf('=')
                    qtdProduto = texto.substring(0, posCaractIgual - 1)
                }

                cy.log(`Qtd: ${qtdProduto}`)

                if (qtdProduto > 0) {

                    cy.get(elements.containerBtnConter)
                        .find(elements.btnMinus)
                        .click()
                }
            })
    }

    removerTodosProdutoDaSacola() {
        cy.get(elements.infPrecoQtdProduto)
            .invoke('text').then(texto => {
                var qtdProduto = 0
                var posCaractIgual = 0

                if (texto.indexOf('=') !== -1) {
                    posCaractIgual = texto.indexOf('=')
                    qtdProduto = texto.substring(0, posCaractIgual - 1)
                }

                cy.log(`Qtd a remover: ${qtdProduto}`)

                for (let index = 0; index < qtdProduto; index++) {
                    cy.get(elements.containerBtnConter)
                        .find(elements.btnMinus)
                        .click()
                }

                //Botão adicionar à sacola deve estar visivel
                cy.get(elements.btnAdicionarSacola).should('be.visible')

            })
    }
}

export default new Catalogo();