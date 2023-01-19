const dividir = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 == 0) reject('No se puede dividir entre CERO')
        else resolve(num1/num2)
    })
}

// dividir(40, 5)
//     .then(resultado => console.log(resultado))
//     .catch(err => console.log(err))

// dividir(40, 0)
//     .then(resultado => console.log(resultado))
//     .catch(err => console.log(err))

const funcAsync = async() => {
    try {
        resultado = await dividir(3, 0)
        console.log(resultado)
        console.log('fin del programa')
    } catch(err) {
        console.log(err)
    }
}

funcAsync()