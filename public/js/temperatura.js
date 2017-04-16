
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
        super(val, measures['C'].name)
    }
    toFahrenheit(){
        return new Fahrenheit(this.value * 9/5 +32);

    }
    toKelvin(){
        return new Kelvin(this.value + 273.15);
    }
}
class Fahrenheit extends Temperatura {
    constructor(val){
        super(val, measures['F'].name)
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
        super(val, measures['K'].name)
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
