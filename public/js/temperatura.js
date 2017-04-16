//var Medida = require('./medida.js');


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
