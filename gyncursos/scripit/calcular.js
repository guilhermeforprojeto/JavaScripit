var retorno     =   confirm("Iniciar calculo de adição?")


    if(retorno == true){
        
            var a           =   prompt("Digite 1 numero inteiro ")
            var b           =   prompt("Novamente digite outro/igual ")
            var resultado   =   Number(a)+Number(b)
            document.write("Olá a soma de "+a+" e "+b+" é: "+resultado)
        
    }else{ 
        window.location.replace("./index.html");
     }

