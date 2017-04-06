'use strict'
const REGEXP = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])\s*(to)?\s*([fFcCkK])/;
var measures;


class Medida {
    constructor(val, type) {
        this.value = val;
        this.type = type;
    }
    toString(){
        return `${this.value.toFixed(2)} ${this.type}`;
    }
    static convertir(temp){
        var val = temp.match(REGEXP);

        if (val){
            var num = val[1];
            var type = val[2].toUpperCase();
            var to = val[4].toUpperCase();

            var source = new measures[type](num);
            var target = measures[to].name;
            var res = source['to'+target]();
            return res.toString();

        }else {
            console.log('error');
        }
    }

}


class Temperatura  extends Medida {
    constructor(val, type){

        super(parseFloat(val), type);
    }
    toCelsius(){
        return this;
    }
    toFahrenheit(){
        return this;
    }
    toKelvin(){
        return this;
    }
}
class Celsius extends Temperatura {
    constructor(val){
        super(val, 'Celsius')
    }
    toFahrenheit(){
        return new Fahrenheit(this.value * 9/5)+32;

    }
    toKelvin(){
        return new Kelvin(this.value + 273.15);
    }
}
class Fahrenheit extends Temperatura {
    constructor(val){
        super(val, 'Fahrenheit')
    }
    toKelvin(){
        return new Kelvin((this.value + 459.67) * 5/9);
    }
    toCelsius(){
        return new Celsius((this.value -32 )*5/9);
    }
}
class Kelvin extends Temperatura {

    constructor(val){
        super(val, 'Kelvin')
    }
    toCelsius(){
        return new Celsius(this.value - 273.15);
    }
    toFahrenheit(){
        return new Fahrenheit((this.value * 9/5)- 459.67);
    }
}

(function(){
    measures = {
        'K': {
            name: 'Kelvin'
        },
        'F': {
            name: 'Fahrenheit'
        },
        'C': {
            name: 'Celsius'
        }
    }
    measures['K'] = Kelvin;
    measures['F'] = Fahrenheit;
    measures['C'] = Celsius;

})()
