var numero1 = "0";
var operacao = null;
var numero2 = "";
var clicadoEmIgual = false;

function incluirDigito(numero){
    if(numero2 && operacao && clicadoEmIgual){
        clicadoEmIgual = false;
        limpar();
        numero1 = digito;
        mostrarNoDisplay(numero1);
        return
    }

    if(operacao !== null){
        numero2 += numero;

        mostrarNoDisplay(numero2);
    }else{
        if(numero1 === "0"){
            numero1 = numero;
        }else{
            numero1 += numero;
        }
    
            mostrarNoDisplay(numero1);
     } 
}

function calcular(){
    var resultado = 0;
    var n1 = parseFloat(numero1);
    var n2 = parseFloat(numero2);
    switch(operacao){
        case"+":
            resultado = n1 + n2;
            break;
            case"-":
            resultado = n1 - n2;
            break;
            case"*":
            resultado = n1 * n2;
            break;
            case"/":
            resultado = n1 / n2;
            break;
    }
    return resultado;
}

function mostrarNoDisplay(valor){
    document.getElementById("display").value = valor;
}

function iniciarCalculo(simbolo){
    if(clicadoEmIgual){
        clicadoEmIgual = false;
        numero2 = "";
    }
    if(operacao === null || numero2 === ""){
        operacao = simbolo;
    }else{
        var resultado = calcular();
        numero1 = resultado;
        operacao = simbolo;
        numero2 = "";
        mostrarNoDisplay(numero1);

    }  
    
}

function limpar(){
    numero1 = "0";
    operacao = null;
    numero2 = "";

    mostrarNoDisplay(numero1);
}

function finalizarCalculo(){
    clicadoEmIgual = true;
    var resultado = calcular();
    numero1 = resultado;
    mostrarNoDisplay(numero1);
    
}

function incluirPonto(){
    if(operacao && numero2 === ""){
        numero2 = "0.";
    }else if(operacao && numero2){
        numero2 += ".";
    }else{
        numero1 += ".";
    }
    
    mostrarNoDisplay(ponto);
}
function obterPorcento(){
    if(!numero2){
        limpar();
    }
    if(!numero2){
        numero2 = "";
        mostrarNoDisplay(numero1)
    }else{
    var porcento = numero1*numero2/100;
    numero2 = porcento;
    mostrarNoDisplay(numero2);
    }
}