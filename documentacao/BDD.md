#Desafio NEXT 
Data: 09/04/2022

## Bdd
##### Cenário: Mostrar lista de produtos    
>Dado que eu acesse o link https://meucomercio.com.br/lojaqualificacao    
>Quando eu acesse a tela inicial do catálogo    
>Então será exibida a lista dos produtos   

## Bdd
##### Cenário: Fazer consulta clicando enter  
>Dado que eu esteja na tela inicial do catálogo
>E digite um texto no campos de busca, por exemplo "Capa Celular S20 Clonado"  
>Quando eu clicar na tecla Enter   
>Então deve executar uma consulta  

## Bdd
##### Cenário: Mostrar detalhes do produto 
>Dado que eu esteja na tela inicial do catálogo 
>E que eu escolha um produto    
>Quando eu clicar no produto escolhido    
>Então deve ser exibido os detalhes do produto    

## Bdd
##### Cenário: Mostrar valor do produto
>Dado que eu esteja na tela inicial do catálogo  
>E que eu escolha um produto   
>Quando eu clico no produto escolhido    
>Então deve ser exibido o valor do produto 

## Bdd  
##### Cenário: Adicionar um produto à sacola   
>Dado que eu esteja na tela de detalhes do produto    
>Quando eu clico no botão Adicionar à sacola  
>Então o visualizo a quantidade e o valor adicionado  

## Bdd
##### Cenário: Adicionar n quantidades de produtos na Sacola 
>Dado que eu esteja na tela de detalhes do produto    
>Quando eu clico 6 vezes no botão [+]
>Então o campo qtde. do produto deve ser adicionado 6 unidades  

## Bdd  
##### Cenário: Calcular qtd x valor  
>Dado que eu esteja na tela de detalhes do produto    
>Quando eu tenho produtos na minha sacola   
>Então visualizo a quantidade e o valor do meu pedido      

## Bdd
##### Cenário: Remover um produto    
>Dado que eu esteja na tela de detalhes do produto    
>Quando eu clico uma vez no botão [-]  
>Então o campo qtde. do produto deve ser subtraído em uma unidade     

## Bdd
##### Cenário: Remover todos os produtos da Sacola   
>Dado que eu esteja na tela de detalhes do produto    
>Quando eu clico n vezes no botão [-]
>E remova todos os produtos da sacola   
>Então devo visualizar o botão Adicionar à sacola     
 

