const calcularColorBarra = (porcentaje) => {
  let maximoColor = 255;

  if (!Number.isInteger(porcentaje)) {
    return "Error no Integer";
  }

  if (porcentaje < 0) {
    return "Error";
  } else if (porcentaje > 100) {
    return "Alert";
  }

  let rojo = Math.floor((255 * porcentaje) / 100);
  let verde = maximoColor - rojo;
  return `RGB(${rojo},${verde},0)`;
};

export default calcularColorBarra;
