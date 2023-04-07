/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
}    

    function sonIguales(x, y) {
       if (x === y) {
          console.log(true);
       } else {
          console.log(false);
       }
    }
    
     sonIguales(3, 3)
     sonIguales(5, 2)

    
function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
}


    function tienenMismaLongitud(str1, str2) {
    if(str1.length == 3 && str2.length == 3){
       console.log(true);
    } else {
       console.log(false);
    }
  }

    tienenMismaLongitud("dos", "dos")
    tienenMismaLongitud("camion", "uno")


    
     
function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
}


    function menosQueNoventa(num) {
    if(num <= 90){
        console.log(true);
    } else {
        console.log(false);
    }
 }

    menosQueNoventa(100)
    menosQueNoventa(12)



function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
}



    function mayorQueCincuenta(num) {
    if(num >= 50){
        console.log(true);
    } else { 
        console.log(false);
    }
 }

    mayorQueCincuenta(80)
    mayorQueCincuenta(20)



function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
}


    function esPar(num) {
    if(num / 2 === 0){
        console.log(true);
    } else {
        console.log(false);
    }
}

    esPar(1)



function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
