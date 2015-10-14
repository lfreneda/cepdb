# cepdb

O repositório cepDb possibilita identificar o endereço baseado em um (CEP) código de endereçamento postal. 

### Contribua
O repositório é construído de maneira colaborativa, por meio do github. Se você identificar que está faltando algum CEP, ou quiser complementar as informações, basta submeter um pull request.

### request:

```shell
cepdb.com.br/v0.1/{cep}.json
```

### response

```json
{
    "cep":"01001000",
    "logradouro":"Pra%C3%A7a%20da%20S%C3%A9", 
    "bairro":"S%C3%A9", 
    "cidade":"S%C3%A3o%20Paulo",
    "uf":"SP",
    "estado":"S%C3%A3o%20Paulo"
}
```
