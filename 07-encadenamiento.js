const pA = new Promise(function(resolve, reject) {
    resolve("Resuelve al valor de A")
    // reject('Rechazo de A')
})

// pA.catch(function(err) {
//     console.log(err)
// })

// pA.then(function(data) {
//     console.log(data)
// }).then(null, function(err) {
//     console.log(err)
// })

// pA.then(function(data) {
//     console.log(data)
// }).then(null, function(err) {
//     console.log(err)
// })

pA  
    .then() 
    .then() 
    .then(function(value) { 
        console.log(value)
    })
    .then() // resolverse al valor de la promesa anterior
    .then(function(value) { 
        console.log(value)
        return { nombre: "Alex" }
    })
    .then(function(value) {
        console.log(value)
    })