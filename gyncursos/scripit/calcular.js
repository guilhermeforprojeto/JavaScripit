var retorno     =   confirm("Iniciar calculo de adição?")


    if(retorno == true){
        
            var a           =   prompt("Digite 1 numero inteiro ")
            var b           =   prompt("Novamente digite outro/igual ")
            var resultado   =   Number(a)+Number(b)
            document.write("Olá a soma de "+a+" e "+b+" é: "+resultado)
        
    }else{ 
        window.location.replace("./index.html");
     }

alert("Vamos aqui usando function, calcular a corrente eletrica")

var V = prompt("Digite o valor da tensão")
var R = prompt("Digite o valor da resistencia")

function calcula(V,R){
    var c = V/R 
    return c
}

var corrente = calcula(V,R)
document.write("O valor da corrent é", corrente )
