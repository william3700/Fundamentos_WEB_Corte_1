

function registro(){
   nombre1=document.getElementById("nombreUsuario").value;
   valorActivo = document.querySelector('input[name="genero"]:checked').value;
   colorOjos=document.getElementById("colorOjos").value;
   texto=document.getElementById("texto").value;
   altura1=document.getElementById("altura").checked;
   if(altura1){
     sol1="más de 1.8 metros de altura"
   } else{
    sol1="";
   }

   peso1=document.getElementById("peso").checked;
   if(peso1){
     sol2="más de 90.7 kilogramos"
   } else{
    sol2="";
   }

   document.getElementById("salida").innerHTML=nombre1+ " "+ valorActivo+ " "+colorOjos+"  "+sol1+" "+sol2+" "+texto;
   document.getElementById("nombreRegistrado").innerHTML=nombre1;
   document.getElementById("ojosRegistrado").innerHTML=colorOjos;
   document.getElementById("alturaRegistrado").innerHTML=sol1;
}