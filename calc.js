function Limpar(id1, id2){
    document.getElementById(id1).value="";
    document.getElementById(id2).value="";
}

function Calcular(numero1, numero2, operacao, saida){
    var num1 = document.getElementById(numero1).value;
    var num2 = document.getElementById(numero2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    var expressao = num1 + operador + num2;
    resultado = eval(expressao);
    if(operador == '+'){
    document.getElementById(saida).innerHTML = "o somatorio entre "+ num1 + " e "+num2 +" é "+ resultado+".";
    }else if(operador == '-'){
            document.getElementById(saida).innerHTML = "A diferença entre "+ num1 + " e "+num2 +" é "+ resultado+".";
            }else if(operador == '*'){
                document.getElementById(saida).innerHTML = "O produto "+ num1 + " por "+num2 +" é "+ resultado+".";
                }else
                document.getElementById(saida).innerHTML = "O quociente de "+ num1 + " dividido por "+num2 +" é "+ resultado+".";

}