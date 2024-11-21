# Testes de API com Postman - LISTA 1 - S206

## Estrutura do Repositório

- **/newman**: Contém os relatórios gerados.
- **respostas.txt**: Contém as respostas para o EX 2.
- **LISTA_1_COLLECTION.postman_collection.json**: Coleção de testes do Postman.
- **Meu ambintezinho.postman_environment.json**: Meu ambiente usado nos testes.

## Executando

Para gerar o relatório de testes, basta rodar o comando dentro da pasta do projeto:

```bash
newman run "LISTA_1_COLLECTION.postman_collection.json" -e "Meu ambintezinho.postman_environment.json" -r htmlextra
```

### Ou também, para somente rodar sem gerar relatório:
 Importar **``LISTA_1_COLLECTION.postman_collection.json``** e **``Meu ambintezinho.postman_environment.json``** para o postman e executar os requests. :)

## Nota importante

- **Teste 6 - Body com dados faltando**: Esse teste foi realizado utilizando a API JSONPlaceholder. Embora ela aceite dados incompletos (como o envio de um corpo com campos faltando), em uma API de verdade, isso *deveria* resultar num ``Bad Request - 400``, já que os campos que deveriam ser obrigatórios estão faltando.
