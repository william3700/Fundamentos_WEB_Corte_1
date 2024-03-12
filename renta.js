



function imprimir(){
    nombre1=document.getElementById("nombre").value;
    apellido1=document.getElementById("apellido").value;
    cedula1=document.getElementById("cedula").value;
    m1=cedula1.length-2;
    m2=cedula1.length;
    cedula2=cedula1.substr(m1,m2);
    patrimonio1=document.getElementById("patrimonio").value;
    ingresos1=document.getElementById("ingresos").value;
    tarjeta1=document.getElementById("tarjeta").value;
    compras1=document.getElementById("compras").value;
    banco1=document.getElementById("banco").value;
    document.getElementById("salida").innerHTML=nombre1 + " " +apellido1 + " " + cedula2;
    
    if(parseInt(patrimonio1)>=190854000 || parseInt(ingresos1)>=59377000 || parseInt(tarjeta1)>=59377000 || parseInt(compras1)>=59377000 || parseInt(banco1)>=59377000){
        document.getElementById("salida").innerHTML=nombre1+" "+apellido1+" debes declarar renta";
        if(parseInt(cedula2)>=1 && parseInt(cedula2)<=26){
            document.getElementById("salida").innerHTML=nombre1+" "+apellido1+" debes declarar renta Agosto";
        }else if(parseInt(cedula2)>=27 && parseInt(cedula2)<=66){
            document.getElementById("salida").innerHTML=nombre1+" "+apellido1+" debes declarar renta Septiembre";
        }else if(parseInt(cedula2)>=67 && parseInt(cedula2)<=100){
        document.getElementById("salida").innerHTML=nombre1+" "+apellido1+" debes declarar renta Noviembre";
    }
    }else{
        document.getElementById("salida").innerHTML=nombre1+" "+apellido1+" No debes declarar renta";
    }

}
