const entradaModa = document.getElementById("moda");
const promedio = document.getElementById("button-media")
const entradaMedia = document.getElementById("media");
const entradaMediana = document.getElementById("mediana");
const entradaDescuento = document.getElementById("InputDescuento");
const entradaPrecio = document.getElementById("InputPrice");
const entradaCupones = document.getElementById("InputCupones");
const botondescuento = document.getElementById("buttonDescuento");
const botonCupones = document.getElementById("buttonCupones");
const mostrarResultadoMediaGeometrica = document.getElementById("resultadoMediaGeometrica");
const mostrarResultadoMedia = document.getElementById("resultadoMediaAritmetica");
const mostrarResultadoMediana = document.getElementById("resultadoMediana");
const mostrarResultadoModa = document.getElementById("resultadoModa")
const mostrarResultadoDescuento = document.getElementById("ResultPrecioDescuento")
const entradaMediaGeometrica = document.getElementById("mediaGeometrica");
const cuotas = document.getElementById("inputCuotas");
const monto = document.getElementById("inputMonto");
const intereses = document.getElementById("inputIntereses");
const mostrarResultadoPagar = document.getElementById("resultadoPagar")
const mostrarResultadoCuadrado = document.getElementById("resultadoCuadrado");
const mostrarResultadoCirculo = document.getElementById("resultadoCirculo");
const mostrarResultadoTrianguloIsosceles = document.getElementById("resultadoTrianguloIsosceles");
const mostrarResultadoTriangulo = document.getElementById("resultadoTriangulo");
//Estadística
//Media
function calcularMediaAritmetica(lista) {
    if(promedio.onclick = false) {
        const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;
        });
        const promedioLista = sumaLista / lista.length;
        return promedioLista;

    }
   
    /* const mostrarResultadoMedia = document.getElementById("resultadoMedia");
    mostrarResultadoMedia.innerText = "La media es de: " + promedioLista; */
    if(promedio.onclick = true) {
    const value = entradaMedia.value;
    let arrayMedia = Array.from(value.split(","), Number);
    let listaOrdenada = arrayMedia.sort((numMenor, numMayor) => numMenor - numMayor);
    const media = listaOrdenada.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      });
      const mediaLista = media / listaOrdenada.length;
    mostrarResultadoMedia.innerText = "La media es de: " + mediaLista;
    }
    
  }
  //Mediana
  function calcularMediana() {
    const medianaValue = entradaMediana.value;
    let arrayMediana = Array.from(medianaValue.split(","), Number);
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
  console.log(listaOrdenada);
    const mitadLista = parseInt(listaOrdenada.length / 2);
    function esPar(numerito) {
      if (numerito % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  
    let mediana;
    if (esPar(listaOrdenada.length)) {
      const elemento1 = listaOrdenada[mitadLista - 1];
      const elemento2 = listaOrdenada[mitadLista];
      const promedioElemento1y2 = (elemento2 + elemento1) / 2;
      mediana = promedioElemento1y2;
      
    } else {
      mediana = listaOrdenada[mitadLista];
    }
    mostrarResultadoMediana.innerText = "La mediana es de: " + mediana;
    
    return mediana;
  }
  //MediaGeométrica
  function calcularMediaGeometrica() {
    const value = entradaMediaGeometrica.value;
    let arrayMedia = Array.from(value.split(","), Number);
    const observaciones = arrayMedia.length
var result = arrayMedia.reduce(function(a, b) {
return a * b;
});
const mediaGeometrica = Math.pow(result, 1/observaciones)
const mediaGeometricaSinDecimales = mediaGeometrica.toFixed(2);
     
    mostrarResultadoMediaGeometrica.innerText = "La media es de: " + mediaGeometricaSinDecimales;
    return mediaGeometrica;
}
//Moda
const listaCount = {};
function calcularModa() {
    const value = entradaModa.value;
    let arrayModa = Array.from(value.split(","), Number);
    let listaOrdenada = arrayModa.sort((numMenor, numMayor) => numMenor - numMayor);
    listaOrdenada.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1; 
            } else {
                listaCount[elemento] = 1; 
            }
           
        }  );
        const listaArray = Object.entries(listaCount).sort(
            function (elementoA, elementoB) {
           return elementoA[1] - elementoB[1]; 
        }
        );
        let mayor = listaArray[listaArray.length-1][1]
    let confirmacion = []
    let moda = []
    //Confirmo si existe o no exite moda
    for (let i = 0; i < listaArray.length; i++) {
        if (!confirmacion.includes(listaArray[i][1])) {
            confirmacion.push(listaArray[i][1])
        }  
    }
    if (confirmacion.length == 1) {
        //Si no existe moda aqui termina la función
        mostrarResultadoModa.innerText = "No hay moda";
    }else{
        //Recorro el array para saber si existe mas de una moda
        listaArray.map((el) =>{
            if (el[1] == mayor) {
                moda.push(el[0])
            }
        })
        //Finalmente imprimo mensaje dependiendo de la cantida de moda que haya
        if (moda.length == 1) {
           mostrarResultadoModa.innerText = `La moda es ${moda}`;
        }else{
            let texto = ""
            for (let i = 0; i < moda.length; i++) {
                texto += moda[i]+" "
            }
           mostrarResultadoModa.innerText = `La moda es: ${texto}`;
        }
    }
}
//Descuentos
const coupons = [
    {
        name: "StarWars",
        discount: 15,
    },
    {
        name: "BIENNN",
        discount: 30,
    },
    {
        name: "John_Cena",
        discount: 25,
    },
    {
        name: "Yaun:da",
        discount: 30,
    }
];
function calcularPrecioConDescuento() {
    const numeroPrecio =  parseInt(entradaPrecio.value);
        const numeroDescuento = parseInt(entradaDescuento.value)
        const porcentajePrecioConDescuento = 100 - numeroDescuento;
        const precioConDescuento = (numeroPrecio * porcentajePrecioConDescuento) / 100;
        mostrarResultadoDescuento.innerHTML = "El precio con descuento son: $" + precioConDescuento;
 
}
function calcularPrecioCupones() {
    const numeroPrecio =  parseInt(entradaPrecio.value);
    console.log(numeroPrecio);
    const valueCupon = entradaCupones.value;
     let encuentraCupon = coupons.find(function(coupons){
        return coupons.name === valueCupon
    });
    const mostrarResultadoPrecioDescuento = document.getElementById("ResultPrecioCupones");
  
    if(!encuentraCupon){
        mostrarResultadoPrecioDescuento.innerHTML = "Tu cupon no es válido.";
       
    }else{
        const precioConDescuento =  (numeroPrecio * (100 - encuentraCupon.discount)) / 100;;
       console.log(encuentraCupon.discount)
        mostrarResultadoPrecioDescuento.innerHTML = "El precio con descuento son: $" + precioConDescuento;
    }
}
//Salarios
//Calcular pasivos, patrimonio neto, patrimonio
//Calcular pago en cuota

function calcularPagoCuotas() {
    const valueIntereses = parseInt(intereses.value);
    const valueMonto = parseInt(monto.value);
    const valueCuotas = parseInt(cuotas.value);
        const valorPrecio = (valueMonto * (100 - valueIntereses)) / 100;
        const montoApagar = valorPrecio / valueCuotas;
        mostrarResultadoPagar.innerText = `El monto a pagar mensual es de $${montoApagar}, el precio total a pagar son $${valorPrecio}`

}
//Figuras Geométricas
const PI = Math.PI;
function areaCuadrado(lado) {
    return lado * lado;
}
function perimetroCuadrado(lado) {
    return lado * 4;
}
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  mostrarResultadoCuadrado.innerText = `El perímetro del cuadrado es ${perimetro} cm`;
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    mostrarResultadoCuadrado.innerText = `El área del cuadrado es ${area} cm cuadrados`;
  }
  function diametroCirculo(radio) {
    return radio * 2;
} 
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
   }
   function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura)/2;
}
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("lado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("lado2Triangulo").value);
    const base = parseInt(document.getElementById("baseTriangulo").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    mostrarResultadoTriangulo.innerText = `El périmetro del triángulo es ${perimetro} cm`;
    }
    function calcularAreaTriangulo() {
        const lado1 = parseInt(document.getElementById("lado1Triangulo").value);
        const base = parseInt(document.getElementById("baseTriangulo").value);
        let altura = Math.sqrt((base / 2) **2 + lado1 **2).toFixed(2);
        const area = areaTriangulo(base, altura);
        mostrarResultadoTriangulo.innerText =`El área del triángulo es ${area} cm`;
    }
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
       }
       function areaCirculo(radio) {
        return (radio * radio) + PI;
    }
    function diametroCirculo(radio) {
        return radio * 2;
    } 
    function calcularPerimetroCirculo() {
        const input = document.getElementById("inputCirculo");
        const value = input.value;
        const diametro = diametroCirculo(value);
        const perimetro = (perimetroCirculo(diametro)).toFixed(2);
        mostrarResultadoCirculo.innerText = `El perímetro del círculo es ${perimetro}`
    }
    function calcularAreaCirculo() {
        const input = document.getElementById("inputCirculo");
        const value = input.value;
        const area = (areaCirculo(value)).toFixed(2);
      mostrarResultadoCirculo.innerText = `El área del círculo es ${area}`
    }
    function calcularAlturaTrianguloIsosceles(){
        const lado1 = parseInt(document.getElementById("lado1TrianguloIsosceles").value);
        const lado2 = parseInt(document.getElementById("lado2TrianguloIsosceles").value);
        const base = parseInt(document.getElementById("baseTrianguloIsosceles").value);
        console.log(base);
     if(base != lado1 && lado1 === lado2) {
         const altura = Math.sqrt(lado1**2-base**2/2*4)
         const alturaSinDecimales = altura.toFixed(2)
         mostrarResultadoTrianguloIsosceles.innerText = `La altura del triángulo isósceles es ${alturaSinDecimales} cm`;
     } else {
        mostrarResultadoTrianguloIsosceles.innerText = "Las medidas ingresadas no conforman un triángulo isósceles"
     }
    }
    function calcularAreaTrianguloIsosceles(){
        const base = parseInt(document.getElementById("baseTrianguloIsosceles").value);
        const lado1 = parseInt(document.getElementById("lado1TrianguloIsosceles").value);
        const altura = Math.sqrt(lado1**2-base**2/2*4)
        const alturaSinDecimales = altura.toFixed(2)
        const area = areaTriangulo(base, alturaSinDecimales);
         mostrarResultadoTrianguloIsosceles.innerText = `El área del triángulo isósceles es ${area} cm`;
    }
