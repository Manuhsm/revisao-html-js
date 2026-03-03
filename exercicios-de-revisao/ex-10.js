// function classificarString(texto){
//     let tamanho = texto.lenght
//     let classificacao;
// }

// if (tamanho <=5){
//     classificacao = "pequena"
// }else if (tamanho <=10){
//     classificacao="media"
// }else{
//     classificacao="media";
// }
// console.log(`A string ${texto} é ${classificacao} `);

// classificarString("aplicativo")

function classificarString(texto) {
    let tamanho = texto.length;
    let classificacao = "";

    if (tamanho <= 5) {
        classificacao = "pequena";
    } else if (tamanho <= 10) {
        classificacao = "média";
    } else {
        classificacao = "grande";
    }

   console.log(`A string ${texto} é ${classificacao} `)
}

classificarString("aplicativos");