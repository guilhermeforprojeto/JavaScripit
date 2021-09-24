alert("Vai começar")
var Cidades = ["São Paulo", "Santo André","Diadema"]
for (i = 0; i < 3; i++){
    document.write("Cidade ",Cidades[i] + "<br/>")
}
document.write("<br/>","Nomes em ordem","<br/>","<br/>")



Cidades.sort()
for (i = 0; i < Cidades.length; i++){
    document.write("Cidade ",Cidades[i] + "<br/>")
}