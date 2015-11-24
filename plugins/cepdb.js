(function() {

    var callback_name = 'jsonp';
    var apiUrl = 'http://cepdb.com.br/api/v1/#{cep}.jsonp.js?callback=' + callback_name;

    this.CepDb = function() {

    };

    /**
     * Lookup on cepdb api for given cep
     * @method search
     * @param {string} cep to be searched
     * @param {options} options with or without onSuccess and onTimeout callbacks and timeout (in seconds) default to 10.
     */
    CepDb.prototype.search = function(cep, options) {
        options = options || {};
        var on_success = options.onSuccess || function(){};
        var on_timeout = options.onTimeout || function(){};
        var timeout = options.timeout || 10;
        var timeout_trigger = window.setTimeout(function(){
            window[callback_name] = function(){};
            on_timeout();
        }, timeout * 1000);

        window[callback_name] = function(data){
            window.clearTimeout(timeout_trigger);
            on_success(decodeProperties(data));
        };

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = apiUrl.replace('#{cep}', cep);
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    function decodeProperties(data) {
        if (data.bairro) { data.bairro = decodeURIComponent(data.bairro); }
        if (data.cidade) { data.cidade = decodeURIComponent(data.cidade); }
        if (data.estado) { data.estado  = decodeURIComponent(data.estado); }
        if (data.logradouro) { data.logradouro = decodeURIComponent(data.logradouro); }
        return data;
    }
}());
