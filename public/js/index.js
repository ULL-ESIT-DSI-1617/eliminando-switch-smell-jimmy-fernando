'use strict'
// var prueba = new Celsius('-108');
// console.log(prueba.to_fahrenheit());

$('#temp-form').on('submit', function(e){
    e.preventDefault();
    var temp;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s(to)?\s([fFcCkK])/;
    var val = temperatura.value.match(regexp);
    if (val){
        console.log(val);
        var num = val[1];
        var type = val[2].toUpperCase();
        var to = val[4].toUpperCase();
        switch (type) {
            case 'C':
                temp = new Celsius(num);
                console.log('celcius');
                break;
            case 'K':
                temp = new Kelvin(num);
                console.log('k');
                break;
            case 'F':
            console.log('f');
                temp = new Fahrenheit(num);
                break;
            default:
        }

        var res;
        switch (to) {
            case 'C':
                res = temp.to_celsius();
                break;
            case 'K':
                res = temp.to_kelvin();
                break;
            case 'F':
                res = temp.to_fahrenheit();
                break;
            default:

        }
        $('#result').text(res);
        console.log(res);

    }else {
        console.log('error');
    }

})
