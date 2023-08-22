// Definición de tipos
type Operation = "suma" | "resta" | "multiplicacion" | "division";
type Grados = "Celsius" | "Fahrenheit";

// Definición de funciones

const calculadora = (operation: Operation, a: number, b: number): number => {
  switch (operation) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      if (b === 0) {
        throw new Error("Imposible dividir por cero");
      }
      return a / b;
    default:
      throw new Error("Operación no válida");
  }
};

const tablaMult = (number: number): void => {
  for (let i = 0; i <= 10; i++) {
    let result: number = number * i;
    console.log(`${number} multiplicado por: ${i} = ${result}`);
  }
  window.alert("Ver en consola");
};

const fibonacci = (max: number): void => {
  let fibArray: number[] = [0, 1];

  for (let i = 2; i <= max; i++) {
    const nextFib = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(nextFib);
  }

  window.alert(`Secuencia de Fibonacci hasta ${max}: FIBONACCI: ${fibArray}`);
};

const conversorGrados = (selectGrado: Grados, cantGrados: number): number => {
  switch (selectGrado) {
    case "Celsius":
      return cantGrados * 1.8 + 32;
    case "Fahrenheit":
      return (cantGrados - 32) / 1.8;
  }
};

const dividirOracion = (oracion: string): number => {
  let arrPalabras = oracion.split(" ");
  let cantPalabras = arrPalabras.length;
  return cantPalabras;
};

// Funciones que se llaman directamente desde los botones

const calculadoraFunction = () => {
  let a: number | null = Number(prompt("Ingrese un número"));
  let b: number | null = Number(prompt("Ingrese otro número"));
  let selectOperation: Operation | null = prompt(
    "Ingrese la operación que desea realizar (suma, resta, multiplicacion, division)"
  ) as Operation;

  try {
    let result = calculadora(selectOperation, a, b);
    window.alert(`El resultado es: ${result}`);
  } catch (error) {
    window.alert(`Error: ${error}`);
  }
};

const tablaMultFunction = () => {
  let numero: number = Number(prompt("Ingrese de qué número desea obtener la tabla:"));
  tablaMult(numero);
};

const fibonacciFunction = () => {
  let max: number = Number(prompt("Ingrese un número límite para la impresión de números Fibonacci:"));
  fibonacci(max);
};

const conversorGradosFunction = () => {
  let cantGrados: number = Number(prompt("Ingrese la cantidad de grados a convertir:"));
  let selectGrado: Grados = prompt("Ingrese a qué tipo desea convertir:") as Grados;

  try {
    let resultConversion = conversorGrados(selectGrado, cantGrados);
    window.alert(`El resultado de la conversión a ${selectGrado} es ${resultConversion}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const contarPalabrasFunction = () => {
  let oracion: string | null = prompt("Ingrese una oración para contabilizar las palabras:");

  if (oracion !== null) {
    window.alert(`La cantidad de palabras en la oración propuesta es de: ${dividirOracion(oracion)}`);
  }
};
