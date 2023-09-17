function calcularCuadrado (lado){
    return{
        perimetro: lado * 4,
        area: lado * lado
    }
}

const trianguloArea1 = 6
const trianguloArea2 = 6
const trianguloBase = 4
const trianguloAltura = 10

const trianguloPerimetro = trianguloArea1 + trianguloArea2 + trianguloBase
const trianguloArea = (trianguloBase * trianguloAltura) / 2

console.log({
    trianguloArea1,
    trianguloArea2,
    trianguloBase,
    trianguloPerimetro,
    trianguloArea
})

function calcularTriangulo (lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}