const personas = [];

// Solicitar al usuario que ingrese la información para las tres primeras personas
for (var i = 0; i <= 2; i++) {
    let nombre = prompt(`Ingrese el nombre de la persona ${i + 1}: `);
    let peso = parseFloat(prompt(`Ingrese el peso(en kilo gramo) de ${nombre}: `));
    let altura = parseFloat(prompt(`Ingrese la altura (en metro) de ${nombre}: `));

    // Validar las entradas
    
    if (!nombre || isNaN(peso) || isNaN(altura)) {
        alert("Entradas no válidas. Se requiere un nombre, valores de peso en kilogramos y altura en metros.");
        break; // Salida del bucle si las entradas son inválidas
    }


    
    // Agregar la información de la persona al array
    personas.push({ nombre: nombre, peso: peso, altura: altura });
}

console.log(personas);

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura );
}

// Calcular el IMC y mostrar la categoría para cada persona
for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    let imc = calcularIMC(persona.peso, persona.altura);
    let categoria = obtenerCategoriaIMC(imc);

    alert(`${persona.nombre}: IMC = ${imc}, Categoría = ${categoria}`);
}

// Función para obtener la categoría del IMC
function obtenerCategoriaIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc < 24.9) {
        return "Normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

// Encontrar la persona con el IMC más alto y mostrar un alerta
const personaConMayorIMC = personas.reduce(function (max, persona) {
    var imcActual = calcularIMC(persona.peso, persona.altura);
    return imcActual > calcularIMC(max.peso, max.altura) ? persona : max;
}, personas[0]);

// Mostrar una alerta con la persona con el "IMC" más alto
alert(`Persona con mayor IMC: ${personaConMayorIMC.nombre}`);
