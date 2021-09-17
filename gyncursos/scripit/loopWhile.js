var iniciar = confirm("Proto para iniciar o loop While, ele vai repetir dentro dacondição o numero de vezes que você informar")
if (iniciar == true){
var numero, contador = 0
numero = prompt("While! Digite um numero menor entre 10 e 1000")

if ((numero < 10 )||(numero > 1000)){
    alert("Valor fora do solicitado")
}else{
    while(contador<=numero){
        document.write(contador+", ")
        contador++
    }
}
}