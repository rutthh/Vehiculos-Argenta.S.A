class Autos {
    #ruedas
    #puertas
    #carroceria
    #modelo
    #marcaDestino
    #costoFabricacion
    constructor(ruedas,puertas,carroceria,modelo,marcaDestino,costoFabricacion){
    this.#ruedas= ruedas;
    this.#puertas= puertas;
    this.#carroceria= carroceria;
    this.#modelo= modelo;
    this.#marcaDestino= marcaDestino;
    this.#costoFabricacion = costoFabricacion;
    }
    mostrarInfo(){
    let info= ` Su carroceria es: ${this.#carroceria} \n Su modelo es: ${this.#modelo} \n Sera distribuido a: ${this.#marcaDestino}`;

    return info
    }
    
    }


class altaGama extends Autos {
    #techoCorredizo
    #asientosCueroReforzado
    #costoExtraPatente
constructor (ruedas,puertas,carroceria,modelo,marcaDestino,costoFabricacion,techoCorredizo, asientosCueroReforzado, costoExtraPatente){
    super (ruedas,puertas,carroceria,modelo,marcaDestino, costoFabricacion);
    this.#techoCorredizo = techoCorredizo;
    this.#asientosCueroReforzado = asientosCueroReforzado;
    this.#costoExtraPatente = costoExtraPatente
}
mostrarInfo(){
    let info2 = `${super.mostrarInfo()} \n Tiene ${this.#techoCorredizo} techo corredizo \n Con ${this.#asientosCueroReforzado} asientos de cuero reforzados \n El costo extra de patente es de $ ${this.#costoExtraPatente}`;

    return info2
}
}

let auto1 = new Autos('4', '3', 'mediana', 'Ka', 'Ford', 2500000);
let auto2 = new Autos('4', '5', 'grande', 'Palio', 'Fiat', 22000000);
let auto3 = new Autos('4', '3', 'chica', 'Punto', 'Fiat', 180000);
let auto4 = new Autos('4', '3', 'grande', 'M8', 'BMW', 25000000);
let auto5 = new Autos('4', '2', 'grande', 'R8', 'Audi', 28000000);
let auto6 = new Autos('4', '3', 'mediana', 'Fiesta', 'Ford', 2300000);

let auto7 = new altaGama('4', '5', 'grande', 'S', 'Tesla', 98000000, 'un', 4, 75000);

/* console.log(auto1.mostrarInfo())
console.log(auto2.mostrarInfo()) 
console.log(auto3.mostrarInfo()) 
console.log(auto4.mostrarInfo()) 
console.log(auto5.mostrarInfo()) 
console.log(auto6.mostrarInfo())

console.log(auto7.mostrarInfo()) */ 

var estadoMotor = "apagado";
var motor = document.getElementById("motor");

function controlarMotor() {
    if (estadoMotor == "apagado") {
        estadoMotor = "encendido";
        console.log('El motor está encendido')
    } else {
        estadoMotor = "apagado";
        console.log('El motor está apagado')
    }
}

var estadoMovimiento = "frenado";
var mov = document.getElementById("movimiento");

function controlarMovimiento() {
    if (estadoMovimiento == "frenado") {
        estadoMovimiento = "enMovimiento";
        console.log('El auto está quieto')
    } else {
        estadoMovimiento = "frenado";
        console.log('El auto comenzó a moverse')
    }
}

var estadoVel = "quieto";
var vel = document.getElementById("velocidad");

function controlarVelocidad() {
    if (estadoVel == "quieto") {
        estadoVel = "andando";
        console.log('El auto acelera de 0km a 50km')
    } else {
        estadoVel = "quieto";
        console.log('El auto desacelera hasta llegar a 0km')
    }
}

var estadoLuces = "apagadas";
var luces = document.getElementById("luces");

function controlarLuces() {
    if (estadoLuces == "apagadas") {
        estadoLuces = "encendidas";
        console.log('El auto tiene las luces encendidas')
    } else {
        estadoLuces = "apagadas";
        console.log('El auto apagó sus luces')
    }
}

var estadoBocina = "sinRuido";
var bocina = document.getElementById("bocina");

function controlarBocina() {
    if (estadoBocina == "sinRuido") {
        estadoBocina = "conRuido";
        console.log('El auto accionó su bocina')
    } else {
        estadoBocina = "sinRuido";
        console.log('El auto dejó de accionar su bocina')
    }
}


