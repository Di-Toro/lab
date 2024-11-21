# Testes de API com Postman - LISTA 1

Este repositório contém os testes de API realizados utilizando o **Postman** e o **Newman** para automação.

## Estrutura do Repositório

- **/newman**: Contém os relatórios gerados.
- **respostas.txt**: Contém as respostas para o EX 2.
- **LISTA_1_COLLECTION.postman_collection.json**: Coleção de testes do Postman.
- **Meu ambintezinho.postman_environment.json**: Meu ambiente usado nos testes.

## Executando

Para gerar o relatório de testes, basta rodar o comando dentro da pasta do projeto:

```bash
newman run "LISTA_1_COLLECTION.postman_collection.json" -e "Meu ambintezinho.postman_environment.json" -r htmlextra

## Nota importante

	Teste 6 - Body com dados faltando: O teste foi realizado utilizando a API JSONPlaceholder. Embora ela aceite dados incompletos (como o envio de um corpo com campos faltando), em uma API real, isso deveria resultar em um erro Bad Request (400), já que campos obrigatórios não foram fornecidos.
