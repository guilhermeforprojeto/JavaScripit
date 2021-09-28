

var startPage = confirm("Iniciar cadastro?")
    if(startPage == true){

                
        var nome        =   prompt("Digite seu 1º Nome","Digite aqui")
        var sobremone   =   prompt("Digite seu Sobrenome","Digite aqui")
        document.write("Olá "+nome + sobremone +", Obrigado por usar nossos testes de JS"+"<br/>"+"<br/>")


    }else{
        window.location.replace("./index.html");
    }

    
function Mensagem(aniversariante){
    alert("Parabéns "+ aniversariante)
}

//chamando a função
Mensagem(nome)

function valorReferencia(strVar,arrVar){
    strVar      = "String Modificada"
    arrVar[0]   = "Array modificado"
}

var texto = "Valor Original"
var vetor = ["Valor Oiginal"]
document.write("String antes de chamar a função:"+ texto + "<br/>")
document.write("Array antes de chamar a função"+ vetor[0]+"<br/>")
//chamar a função
valorReferencia(texto, vetor);
document.write("String após chamar a função: " + texto + "<br/>")
document.write("Array apos chamar a função: " + vetor[0] + "<br/>")