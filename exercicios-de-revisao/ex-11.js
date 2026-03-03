let carro = {
    marca:"Volkswagem",
    modelo:"Nivus",
    ano:2026,
}

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

carro.cor = "branco"

console.log("Objeto após adicionar cor:", carro);

delete carro.ano;

console.log("Objeto após remover ano:", carro);
