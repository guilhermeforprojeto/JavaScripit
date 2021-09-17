var fruta = prompt("Digite nome da fruta aqui")
switch (fruta){
    case "Morango":
        alert("Boa fruta, uma das melhores")
        break
    case "Uva":
        alert("Boa se for verde então melhor ainda")
        break
    case "Banana":
        alert("Melhor furta no açai!")
        break
    default:
        alert("Não conheço essa tente de novo.")
                  
}
var confirma = confirm("Começar de novo?")
        if(confirma == true){
            window.location.replace("./switch.html");
        }else{
            window.location.replace("./index.html");
            
        }    


document.write("Aeee "+fruta+"foi o que você digitou")