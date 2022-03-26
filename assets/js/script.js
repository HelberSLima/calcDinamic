function insert(num){
    var resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado + num;
}

function clean(){
    document.getElementById('display').innerHTML = "";
    document.getElementById('display').style.display = 'block';
}

function back(){
    var apagar1 = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = apagar1.substring(0, apagar1.length -1);
}

function calcular(){
    var resposta = document.getElementById('display').innerHTML;
    if(resposta){
        document.getElementById('display').innerHTML = eval(resposta);
    }
}

function raiz(){
    var quadrada = document.getElementById('display').innerHTML;
    if(quadrada){
        document.getElementById('display').innerHTML = Math.sqrt(quadrada);
    }
}

function porcento(){
    var cento = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = (cento)/100;
}

function off(){
    var desligar = document.getElementById('display');
    document.getElementById('display').style.display = 'none';
}