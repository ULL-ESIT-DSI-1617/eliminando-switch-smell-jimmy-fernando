'use strict'
const MEASURE = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
const REGEXP = new RegExp(MEASURE.source + /\s*(to)?\s*([fFcCkK])/.source);
var measures;


class Medida {
    constructor(val, type) {
        if(!type){
            var tmp = val.match(MEASURE);
            if (tmp) {
                val = Number(tmp[1]);
                type = measures[tmp[2].toUpperCase()].name;
            }else {
                throw 'Formado no válido';
            }
        }
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
            throw 'Formado no válido';
        }
    }

}
