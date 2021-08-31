alert("Começando!!!")
var nome        =   prompt("Digite seu 1º Nome","Digite aqui")
var sobremone   =   prompt("Digite seu Sobrenome","Digite aqui")
var mensagem
var retorno     =   confirm("Iniciar calculo de adição?")
    if(retorno == true){

                alert("Calculo teste!")
        let a           =   prompt("Digite 1 numero inteiro ","")
        let b           =   prompt("Novamente digite outro/igual ","")
        let resultado   =   Number(a)+Number(b)
        document.write("Olá "+nome+""+sobremone+"A soma de "+a+" e "+b+" é: "+resultado)

    }else{
        document.write("Operação foi cancelada, obrigado por usar nossos testes de JS")
    }


