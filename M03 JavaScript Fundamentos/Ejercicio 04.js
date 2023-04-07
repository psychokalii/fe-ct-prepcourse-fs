/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
}


     
    function elevarAlCuadrado(num) {
    var potencia = num ** 2;
    console.log(potencia);
    }

    elevarAlCuadrado(3)



function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
}


    function elevar(num, exponent) {
    var exponente = num ** exponent;
    console.log(exponente);
    }

    elevar(2, 3) 



function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
}



    function redondearNumero(num) {
    var redondear = Math.round(num);
    console.log(redondear);
    }

    redondearNumero(2.5)
     


function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
}


    function numeroRandom() {
    Math.random;
    }

    numeroRandom()    




/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
