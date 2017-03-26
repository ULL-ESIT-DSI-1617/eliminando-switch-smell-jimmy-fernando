# Programación orientada a objetos en Javascript

## ¿Qué es un objeto?
Un objeto es una "cáscara dura" que esconde la complejidad en su interior y nos ofrece una interfaz con métodos y funciones para que el objeto pueda ser usado.

## ¿Qué es un método?
Son propiedades simples que poseen valores de funciones. Por ejemplo:
```js
var rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```

Los métodos tienen una variable llamada `this` que apunta hacia el objeto que lo ha llamado.
```js
function speak(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
fatRabbit.speak("I could sure use a carrot right now.");
// → The fat rabbit says 'I could sure use a carrot
//   right now.'
```

Este código utiliza la variable `this` para saber qué conejo está hablando, pues cada vez que imprime la cadena de texto, también imprime el "tipo" (la variable `type` del objeto) mediante `this`.

---

### Prototipos

Por otro lado, tenemos los **prototipos**, que son otros objetos que sirven como "padres" de otros, de tal forma que hay una herencia implícita. Para obtener el prototipo de un objeto, tenemos el método `getPrototypeOf()`
```js
console.log(Object.getPrototypeOf({}) ==
            Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```

---

### Constructores
Un constructor es un método que se encarga de crear el objeto de una forma personalizada, asignando determinados valores dados a variables, etc. En Javascript, llamar a un método con la palabra reservada `new` a su lado hace que dicho método se trate como un constructor. El constructor usará la variable `this` para inicializar sus "atributos", por ejemplo:
```js
function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);
// → black
```

Es una buena práctica que el nombre del constructor use mayúsculas, y los objetos creados con `new` son llamados **instancias** del constructor. Estas instancias tienen una propiedad llamada "prototipo" que se puede usar para añadir más métodos al objeto creado con el constructor.
```js
Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" +
              line + "'");
};
blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'
```

---

### Interferencia de prototipos
Un prototipo puede ser usado en cualquier momento para añadir nuevas propiedades y métodos a todos los objetos basados en él. Por ejemplo, si queremos que nuestros conejos bailen:
```js
Rabbit.prototype.dance = function() {
  console.log("The " + this.type + " rabbit dances a jig.");
};
killerRabbit.dance();
// → The killer rabbit dances a jig.
```

También podemos crear objetos sin prototipos, de la siguiente forma:
```js
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
// → false
console.log("pizza" in map);
// → true
```

El `null` que pasamos como parámetro al método `create()` indica el prototipo concreto que queremos que tenga el objeto.

---

### Getters y setters
Los métodos llamados getters y setters son formas de obtener y asignar valores a propiedades del objeto, respetando la interfaz.
```js
var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("Ignoring attempt to set height to", value);
  }
};

console.log(pile.height);
// → 3
pile.height = 100;
// → Ignoring attempt to set height to 100
```
De esta forma, dependiendo de si usamos una asignación o no con un atributo del objeto, se llamará al método *getter* o *setter*. Esto también lo indican las palabras reservadas `set` y `get` que ponemos delante del nombre del método, que se encargarán de ejecutar un método u otro dependiendo de si la propiedad es leída o modificada.

## Herencia
La herencia define una jerarquía en un conjunto de clases, lo que permite que las clases hijas puedan heredar métodos y variables de las clases padre, pero no al revés. Tomando como ejemplo nuestra práctica, donde hemos tenido que usar herencia, se definiría de la siguiente manera:
```js
class Temperatura  extends Medida {
    constructor(val, type){
      ...
    }
  }
```

## Método instanceof()
En ocasiones, es útil saber de qué constructor proviene un objeto determinado. Para ello, Javascript posee un método llamado `instanceof()`
```js
console.log(new RTextCell("A") instanceof RTextCell);
// → true
console.log(new RTextCell("A") instanceof TextCell);
// → true
console.log(new TextCell("A") instanceof RTextCell);
// → false
console.log([1] instanceof Array);
// → true
```
Este método comprueba el árbol de herencia, y si el atributo `prototype` del objeto deriva del atributo `prototype` de la clase, entonces el método devuelve *true*. Este método puede ser usado en las clases convencionales como por ejemplo `Array`.
