var alturaTotal = alturaDePresion + alturaEstatica + alturaDeFriccion;
var alturaDePresion
var alturaEstatica
var alturaDeFriccion

// succión
var alturaEstaticaSuccion

var alturaDeFriccionSuccion

// descarga
var alturaEstaticaDescarga
var alturaDeFriccionDescarga

function ecuacionDarcyWeisbach({ factorDeFriccionDeFannin: f, velocidadDelFluido: v, gravedad: g, longitudDeCañeria: l, diametroInterno: Di, eleipsonK: EK }) {
  // eleipsonK es la representación matemática para la sumatoria de los coeficientes de fricción de cada accesori

  // Hf = altura de fricción
  let Hf = f * (
    ((Math.pow(v, 2) / 2 * g) * (l / Di))
    +
    ((Math.pow(v, 2) / 2 * g) * EK))
  return Hf
}

// Q = V * A 

// ----- Reinolds ------

function reinolds({ caudal: Q, densidad: ro, viscosidad: micro, diametroInterior: Di }) {

  let Re = (4 * Q * ro) / (micro * Math.PI * Di)

  return Re

}

// ---------- factor de fanning -----------

function factorDeFriccionDeFannin({ variableAdeFannin: A, variableBdeFannin: B, numeroDeReinolds: Re }) {
  let f = 2 * Math.pow((Math.pow((8 / Re), 12) + Math.pow((A + B), -1.5)), (1 / 12))
  return f
}

function variableAdeFannin({ numeroDeReinolds: Re, rugosidad: e, diametro: D }) {
  let A = Math((2.457 * (Math.log(((Math.pow((7 / Re), 0.9)) + (0.27 * (e / D))), -1))), 16);
  return A
}

function variableBdeFannin({ numeroDeReinolds: Re }) {
  let B = Math.pow((37530 / Re), 16)
  return B
}



var P1
var P2
var densidad
var gravedad