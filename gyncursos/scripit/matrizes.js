var matriz = [
    ["Banana","Maça"],
    ["Pêra", "Abacate"],
    ["Uva","Tâmara"]
]
//primeiro [] é a o numero da linha e o segundo é a coluna
document.write("Aqui temos os elementos especificados:"+"<br>")
document.write(matriz[2][1]+"<br>")
document.write("Aqui temos todos elementos:"+"<br>")
document.write(matriz+"<br>"+"<br>")

var valores = ''
for (var L = 0; L<= 2; L++){
    for (var C = 0; C <= 1; C++){
        valores += matriz[L][C] + "\n";
    }
}

document.write("Conteúdo da matriz usando for:"+"<br>" + valores+"<br>")
var valores = ''
for (var Lm = 0; Lm<= 2; Lm++){
    for (var Cm = 0; Cm <= 1; Cm++){
        if ( Cm < 1){
        valores += matriz[Lm][Cm] + "   ";
    }else {
        valores += matriz[Lm][Cm] + "\n";
    }
    }
}
alert("Matriz em colunas:\n"+valores)

