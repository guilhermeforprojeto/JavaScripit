var iniciar = confirm("Esta pronto para iniciar o loop for repetindo 1000 vezes?")
if (iniciar == true){
var numero, contador = 0
numero = prompt("For! Condição: Digite um numero menor entre 10 e 1000")

if ((numero < 10 )||(numero > 1000)){
    alert("Valor fora do solicitado")
}else{
    for(i = 1;i < 1000;i++){
        document.write(i+", ")
        
    }
}
}else{}