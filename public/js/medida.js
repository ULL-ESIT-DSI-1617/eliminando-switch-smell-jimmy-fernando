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
