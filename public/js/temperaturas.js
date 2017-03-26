'use strict'
class Medida {
    constructor(val, type) {
        this.value = val;
        this.type = type;
    }
    log(){
        return `${this.value} ${this.type}`;
    }

}


class Temperatura  extends Medida {
    constructor(val, type){

        super(parseFloat(val), type);
    }
    to_celsius(){
        return this.log();
    }
    to_fahrenheit(){
        return this.log();
    }
    to_kelvin(){
        return this.log();
    }
}
class Celsius extends Temperatura {
    constructor(val){
        super(val, 'Celsius')
    }
    to_fahrenheit(){
        return ( (this.value * 9/5)+32 ).toFixed(2) + ' Fahrenheit';

    }
    to_kelvin(){
        return (this.value + 273.15).toFixed(2) + ' Kelvin';
    }
}
class Fahrenheit extends Temperatura {
    constructor(val){
        super(val, 'F')
    }
    to_kelvin(){
        return ((this.value + 459.67) * 5/9).toFixed(2) + ' Kelvin';
    }
    to_celsius(){
        return ( (this.value -32 )*5/9).toFixed(2) + ' Celsius';
    }
}
class Kelvin extends Temperatura {
    constructor(val){
        super(val, 'K')
    }
    to_celsius(){
        return (this.value - 273.15).toFixed(2) + ' Celsius';
    }
    to_fahrenheit(){
        return ((this.value * 9/5)- 459.67).toFixed(2) + ' Fahrenheit';
    }
}
