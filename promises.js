const getData = () => {
 // promises -> é um objecto que representa o sucesso ou a falha de uma 
 //operação assincrona, na maioria das vezes eu vou consumir uma 
 //promises já criada por alguem, promises é uma função construtora

// o promises recebe dois resultados possiveis: 
// 1-resolve -> significa que os dados que eu queria foram obtidos 
// 2- redhat -> significa que um erro aconteceu e apromises foi rejeitada
    return new Promise((resolve, reject) =>{
resolve("Dados aqui"); // quando aparece o fulfilled significa que foi pegue com sucesso 
//reject("erro aqui");

    } ) 
}
// para acessar o valor que a promises esta encapsulando temos que utilizar o then
// then -> metodo responnsavel em receber a resposta de sucesso da promises
getData() // ao separar o then e o getData chama-se identação, essa quebra de linha que fiz
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // o catch só vai funcionar quando o metodo reject for invocada
  // ou quando o codigo do then lança um erro
  // o value pega o valor do sucesso, neste caso ele pega a mensagem "Dados aqui"
