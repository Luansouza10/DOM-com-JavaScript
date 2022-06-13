function Limpar(id1, id2){
    document.getElemntById(id1).value="";
    document.getElemntById(id2).value="";
}

function Calcular(numero1, numero2, operacao, saída) {
    var num1 = document.getElemntById(numero1).value="";
    var num2 = document.getElemntById(numero2).value="";
    var operador = document.getElemntById(operacao).options[document.getElementById(oepracao).selectIndex].value;
    var expressao = num1 + operador + num2;
    resultado = eval(expressao); 
    document.getElementById("saida").innerHTML = resultado;
    
}