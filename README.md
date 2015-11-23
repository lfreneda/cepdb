# cepdb
API de cep com acesso gratuito construida de maneira colaborativa(pull requests) hospedada com [Github Pages](https://pages.github.com/).

## Como funciona?
cepdb usa [Github Pages](https://pages.github.com/) como hosting (afinal, são arquivos estáticos) e usamos [JSONP](https://pt.wikipedia.org/wiki/JSONP) para "burlar" o [same origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) 

## Como contribuir?
O repositório é construído de maneira colaborativa / open source. 
Se você identificar que está faltando algum CEP ou quiser complementar as informações de um CEP existente, basta submeter um [pull request](https://help.github.com/articles/using-pull-requests/) com a correção.
Simples né?

## Como usar? 

Javascript:
```javascript
    function jsonp(data) {
        alert(JSON.stringify(data));
    }
    var script = document.createElement('script');
    script.src = 'http://cepdb.com.br/api/v1/05422010.jsonp.js?callback=jsonp'
    document.getElementsByTagName('head')[0].appendChild(script);
```

### Exemplos 

- [examples/using-simple-jsonp.html](https://github.com/lfreneda/cepdb/blob/gh-pages/examples/using-simple-jsonp.html)
- [examples/using-javascript-plugin.html](https://github.com/lfreneda/cepdb/blob/gh-pages/examples/using-javascript-plugin.html)