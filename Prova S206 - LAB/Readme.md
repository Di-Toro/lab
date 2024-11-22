# Prova - S206 - LAB


# Executando parte 1 - Testes de UI

```bash
npx cypress run
```

# Executando parte 2 - Testes de API

Para gerar o relatório de testes, basta rodar o comando dentro da pasta do projeto:

```bash
newman run "Prova_Collection.postman_collection.json" -r htmlextra
```

### Rodando sem gerar relatório:

```bash
newman run "Prova_Collection.postman_collection.json"
```

ou

Importar **``Prova_Collection.postman_collection.json``** para o postman e executar os requests. :)








