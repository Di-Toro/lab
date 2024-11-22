# Prova - S206 - LAB


# Executando parte 1 - Testes de UI

1. Abra o terminal.
2. Navegue até a pasta do projeto.
3. Execute o comando:
```bash
npx cypress run
```

> **Nota:** Certifique-se de que o Cypress está instalado corretamente antes de executar os testes.


# Executando parte 2 - Testes de API

## Rodando com relatório de Testes

Para gerar o relatório de testes, basta rodar o comando dentro da pasta do projeto:

```bash
newman run "Prova_Collection.postman_collection.json" -r htmlextra
```

## Rodando sem gerar relatório

```bash
newman run "Prova_Collection.postman_collection.json"
```

## Rodando manualmente

1. Abra o Postman.
2. Importe o arquivo Prova_Collection.postman_collection.json.
3. Execute os requests diretamente na interface do Postman.
4. Importe **``Prova_Collection.postman_collection.json``** para o postman e execute os requests.








