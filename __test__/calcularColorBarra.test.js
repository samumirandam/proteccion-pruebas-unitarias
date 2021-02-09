import calcularColorBarra from "../src/Utils/calcularColorBarra";

describe("Pruebas unitarias de la función de Calcular Color de la barra - Método calcularColorBarra", () => {
  test("Que el método muestre un error cuando el porcentaje sea negativo", () => {
    let porcentaje = -50;
    let colorBarra = calcularColorBarra(porcentaje);
    expect(colorBarra).toEqual("Error");
  });
  test("Que el método mueste verde RGB(0,255,0) cuando el porcentaje sea 0", () => {
    let porcentaje = 0;
    let colorBarra = calcularColorBarra(porcentaje);
    expect(colorBarra).toEqual("RGB(0,255,0)");
  });

  test("Que el método muestre un color entre rojo y verde deacuerdo con el porcentaje (Porcentaje = 50 -> RGB(127,128,0))", () => {
    let porcentaje = 50;
    let colorBarra = calcularColorBarra(porcentaje);
    expect(colorBarra).toEqual("RGB(127,128,0)");
  });

  test("Que el método mueste rojo RGB(255,0,0) cuando el porncetaje sea 100", () =>{
    let porcentaje = 100;
    let colorBarra = calcularColorBarra(porcentaje);
    expect(colorBarra).toEqual("RGB(255,0,0)");
  });

  test("Que el método muestre una alerta cuando el porcentaje sea mayor a 100", () => {
    let porcentaje = 150;
    let colorBarra = calcularColorBarra(porcentaje);
    expect(colorBarra).toEqual("Alert");
  });

  test("Que el método muestre una Error no number cuando el porcentaje sea una letra", () => {
    let porcentaje = "Hello!";
    let colorBarra = calcularColorBarra(porcentaje);
    expect(colorBarra).toEqual("Error no number");
  });
});
