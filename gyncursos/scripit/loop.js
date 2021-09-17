var numero, contador = 0
numero = prompt("Digite um numero menor entre 10 e 1000")

if ((numero < 10 )||(numero > 1000)){
    alert("Valor fora do solicitado")
}else{
    while(contador<=numero){
        document.write(contador+", ")
        contador++
    }
}