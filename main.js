// let nombreUser =prompt("Ingresa tu nombre")
// // alert(`Bienvenido ${nombreUser} a la API de Rick and Mordy`)

// let numero = parseInt(prompt("Ingrese el primer valor"))
// let numero2 = parseInt(prompt("Ingrese el primer valor"))
// if (isNaN(numero) || isNaN(numero2)) {
//     alert('Ingresa un numero')
// }
// else {
//     let suma = numero + numero2
//     alert("La suma de los numeros es: " + suma)
// }


// alert("La suma de los numeros es la siguiente: " + suma)

function personajes(done){

    const url = 'https://rickandmortyapi.com/api/character'
    fetch(url)
        .then(((response) => response.json()))
        .then((data) => done(data))
        .catch((error) => console.log(error))
        .finally(() => console.log('Finalizo la peticion'))


}

function mostrarDatos(data) {
    console.log(data.results);
    const results = data.results;
    const section = document.querySelector('.section');
    let html = '';
    results.forEach(element => {
        html += `
        <div class="card">
        <img src="${element.image}" alt="${element.name}">
        <h2>${element.name}</h2>
        <p>${element.species}</p>
        </div>
        `
    });
    section.innerHTML = html;
}

personajes(mostrarDatos);
