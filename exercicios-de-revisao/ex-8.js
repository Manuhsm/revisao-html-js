let frutas = ["maçã", "banana", "laranja"];

frutas.forEach(function(fruta) {
    console.log(fruta);
});
frutas.push("uva");
console.log(`Arrays após adicionar uva`);
console.log(frutas);


frutas.pop();
console.log(`Arrays após remover a última fruta`);
console.log(frutas);