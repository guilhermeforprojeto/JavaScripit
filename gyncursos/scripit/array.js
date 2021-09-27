alert("Vai começar")
var Cidades = ["São Paulo", "Santo André","Diadema","Bahia","Aracaju"]
for (i = 0; i < 3; i++){
    document.write("Cidade ",Cidades[i] + "<br/>")
}
document.write("<br/>","Nomes em ordem","<br/>","<br/>")

Cidades.sort()
for (i = 0; i < Cidades.length; i++){
    document.write("Cidade ",Cidades[i] + "<br/>")
}

document.write("<br/>","Nomes em ordem contraria","<br/>","<br/>")

Cidades.sort()
Cidades.reverse()
for (i = 0; i < Cidades.length; i++){
    document.write("Cidade ",Cidades[i] + "<br/>")
}

document.write("<br/>","Numeros em ordem","<br/>","<br/>")

var Valores = [9,4,1,55,62,91,2]

function ordemNum(a,b){
    return a > b ? 1 : a < b ? -1 :0;
}
//Function feita mais simples
function ordemNum(a,b){
    return a - b;
}

Valores.sort(ordemNum);
for (i=0;i<Valores.length;i++){
    document.write(Valores[i]+" - ")
}