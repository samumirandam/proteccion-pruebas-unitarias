import calcularValorBarra from "../src/Utils/calcularValorBarra";

describe("Pruebas unitarias de la función de Calcular Valor de la barra - Método calcularValorBarra", () => {
  test("Que el método muestre un error cuando el porcentaje sea negativo", () => {
    let valorMaximo = 200;
    let porcentaje = -50;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual("Error");
  });

  test("Que el método muestre 0 cuando el porcentaje sea 0", () => {
    let valorMaximo = 200;
    let porcentaje = 0;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual(0);
  });

  test("Que el método muestre el valor que es", () => {
    let valorMaximo = 200;
    let porcentaje = 50;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual(100);
  });

  test("Que el método muestre el valor maximo el porcentaje sea 100", () => {
    let valorMaximo = 200;
    let porcentaje = 100;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual(valorMaximo);
  });

  test("Que el método muestre una alerta cuando el porcentaje sea mayor a 100", () => {
    let valorMaximo = 200;
    let porcentaje = 150;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual("Alert");
  });

  test("Que el método muestre error cuando el valor maximo sea negativo", () => {
    let valorMaximo = -200;
    let porcentaje = 50;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual("Error");
  });

  test("Que el método muestre error cuando el valor maximo sea 0", () => {
    let valorMaximo = 0;
    let porcentaje = 50;
    let valorBarra = calcularValorBarra(valorMaximo, porcentaje);
    expect(valorBarra).toEqual("Error");
  });
});
