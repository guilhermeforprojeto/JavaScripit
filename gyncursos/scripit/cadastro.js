

var startPage = confirm("Iniciar cadastro?")
    if(startPage == true){

                
        var nome        =   prompt("Digite seu 1º Nome","Digite aqui")
        var sobremone   =   prompt("Digite seu Sobrenome","Digite aqui")
        document.write("Olá "+nome+sobremone+", Obrigado por usar nossos testes de JS")


    }else{
        window.location.replace("./index.html");
    }

    
function Mensagem(aniversariante){
    alert("Parabéns "+ aniversariante)
}

//chamando a função
Mensagem(nome)