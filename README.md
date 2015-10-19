# cepdb

O repositório cepDb possibilita identificar o endereço baseado em um (CEP) código de endereçamento postal. 

cepdb usa Github pages como hosting (afinal, são arquivos estáticos) e usamos [JSONP](https://pt.wikipedia.org/wiki/JSONP)

## Contribua
O repositório é construído de maneira colaborativa, por meio do github. Se você identificar que está faltando algum CEP, ou quiser complementar as informações, basta submeter um pull request.



### request

```javascript
 $.ajax({
     url: 'http://cepdb.com.br/api/v1/01001000.jsonp.js',
     dataType: 'jsonp',
     jsonpCallback: 'jsonp',
     success: function(data) {
         if (data.bairro) {
             data.bairro = decodeURIComponent(data.bairro);
         }
         data.cidade = decodeURIComponent(data.cidade);
         data.estado = decodeURIComponent(data.estado);
         if (data.logradouro) {
             data.logradouro = decodeURIComponent(data.logradouro);
         }
         return callback(data);
     }
 });
```

### response

```javascript
jsonp({"cep":"01001000","logradouro":"Pra\u00e7a da S\u00e9","bairro":"S\u00e9","cidade":"S\u00e3o Paulo","uf":"SP","estado":"S\u00e3o Paulo"});
```

## Quer ajudar? 

- [ ] Criar home do site
- [ ] Melhor README @ Github
- [ ] Criar libraries e packages para principais linguagens
    - [ ] C#
    - [ ] javascript
    - [ ] ruby
    - [ ] python
    - [ ] java
- [ ] Acrescentar latitude e longitude por cep
