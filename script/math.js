console.group("Cuadrado")
function calcularCuadrado (lado){
    return{
        perimetro: lado * 4,
        area: lado * lado
    }
}
console.groupEnd("Cuadrado")

console.group("Triángulo")
function calcularTriangulo (lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}
console.groupEnd("Triángulo")

console.group("Círculo")

function calcularCirculo (radio){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow (radio, 2)
    return{
        circunferencia: diametro * Math.PI.toFixed(2),
        area: radioAlCuadrado * Math.PI.toFixed(2)
    }
}

console.groupEnd("Círculo")