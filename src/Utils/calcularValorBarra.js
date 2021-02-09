
const calcularValorBarra = (valorMaximo, porcentaje) => {
  if (valorMaximo <= 0) {
    return "Error";
  }

  if (porcentaje < 0) {
    return "Error";
  } else if (porcentaje > 100) {
    return "Alert";
  }

  return (valorMaximo * porcentaje) / 100;
};

export default calcularValorBarra;
