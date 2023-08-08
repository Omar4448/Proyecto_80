nombre_alumno_array = [];

ver_alumno_array = []

function enviar() {
    /*var nombre_1 = document.getElementById("alumno1").value;
    var nombre_2 = document.getElementById("alumno2").value;
    var nombre_3 = document.getElementById("alumno3").value;
    var nombre_4 = document.getElementById("alumno4").value;
    var nombre_5 = document.getElementById("alumno5").value;
    
    nombre_alumno_array.push(nombre_1);
    nombre_alumno_array.push(nombre_2);
    nombre_alumno_array.push(nombre_3);
    nombre_alumno_array.push(nombre_4);
    nombre_alumno_array.push(nombre_5);*/

    for (var j = 1; j < 6; j++) {
        var nombre_alumno = document.getElementById("alumno" + j).value;
        console.log(nombre_alumno);
        nombre_alumno_array.push(nombre_alumno);
    }

    console.log(nombre_alumno_array);
    document.getElementById("mostrar_nombres").innerHTML = nombre_alumno_array

    document.getElementById("boton_env").style.display = "none";
    document.getElementsByTagName("boton_ordenar").style.display = "block";
}
function ordenar() {
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("mostrar_nombres").innerHTML = nombre_alumno_array
}

function limpiar() {

    location.reload();


}
function buscar() {
    var B = document.getElementById("texto_buscar").value;
    var found = 0;
    var j;
    for (j = 0; j < nombre_alumno_array.length; j++) {
                if(B==nombre_alumno_array[j])
                {found=found+1;}
       document.getElementById("encontrado").innerHTML="encontrado: "+found                                
               




    }






}
