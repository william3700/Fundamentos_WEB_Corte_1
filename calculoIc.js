const today = new Date();
console.log(today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate());
let resultado;

function calcular(){

    alt=document.getElementById("estatura").value;
    pes=document.getElementById("peso").value;
    nacimiento=document.querySelector('input[type="date"]').value;
    anioNacimiento=parseInt(nacimiento.substring(0,4));
    mesNacimiento=parseInt(nacimiento.substring(5,7));
    diaNacimiento=parseInt(nacimiento.substring(8,11));
    
    edadAnios= today.getFullYear()-anioNacimiento;
    edadMes=today.getMonth()+1-mesNacimiento;
    edadDias=today.getDate()-diaNacimiento;

    let diastotales=edadAnios*365+edadMes*30+edadDias;
    let aniostotales=diastotales/365;
    let mesestotales=12*(aniostotales-Math.floor(aniostotales));
    let diastotales2=Math.floor((mesestotales-Math.floor(mesestotales))*30);

    let aniosMeses = Math.floor(mesestotales)+" meses y "+(-mesestotales+Math.floor(mesestotales))*30+ " días";
    let aniosAnios = (aniostotales);

   console.log(diastotales)
   console.log(mesestotales)
   console.log(aniostotales)


    indice=100*100*pes/(alt*alt);
    
    if (indice<18.5){
        resultado="Bajo peso";
    }else if(indice>18.5 && indice<24.9){
        resultado="Peso normal"; 
    }else if(indice>25 && indice<26.9){
        resultado="Sobre peso grado I"; 
    }else if(indice>27 && indice<29.9){
        resultado="Sobre peso grado II"; 
    }else if(indice>30 && indice<34.9){
        resultado="Obesidad tipo I"; 
    }else if(indice>35 && indice<39.9){
        resultado="Obesidad tipo II"; 
    }else if(indice>40 && indice<49.9){
        resultado="Obesidad tipo III (mórbida)"; 
    }else if(indice>50){
        resultado="Obesidad tipo IV (extrema)"; 
    }

    document.getElementById("salidaID").innerHTML=indice;
    document.getElementById("conclusion").innerHTML=resultado;
    document.getElementById("peso1").innerHTML=pes;
    document.getElementById("estatura1").innerHTML=alt;
    document.getElementById("fecha").innerHTML=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    document.getElementById("naci").innerHTML=nacimiento;

    document.getElementById("edades").innerHTML=Math.floor(aniostotales)+" años "+Math.floor(mesestotales) + " meses y "+diastotales2+ " días";

}