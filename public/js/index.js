'use strict'

$('#temp-form').on('submit', function(e){
    e.preventDefault();
    $('#result').text(Medida.convertir(temperatura.value));
});
