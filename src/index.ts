let dimArreglo: number = Number(
  prompt("Ingrese el numero de butacas a consultar");
);
let butacasCine: boolean[] = new Array(dimArreglo);

function asignacionButacas() {
  return Boolean(Math.floor(Math.random() * 2));
}

function ocupacionButacas(butacas: boolean[]) {
  let butacasOcupadas = 0;
  let butacasDesocupadas = 0;
  for (let indice: number = 0; indice < butacas.length; indice++) {
    butacas[indice] = asignacionButacas();
    if (butacas[indice] === false) {
      butacasDesocupadas += 1;
    } else {
      butacasOcupadas += 1;
    }
  }
  console.log(`El numero de butacas ocupadas es ${butacasOcupadas}`);
  console.log(`El numero de butacas deocupadas es ${butacasDesocupadas}`);
}
console.log(`La cantidad de butacas del cine son ${butacasCine}`);// aca deberias mostrar dimArreglo
ocupacionButacas(butacasCine);
//la solucion esta bien
