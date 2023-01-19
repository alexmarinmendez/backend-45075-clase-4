const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 == 0 || num2 == 0) reject('Operacion innecesaria')
        else resolve(num1 + num2)
    })
}

async function operaciones() {
    try {
        console.log(await sumar(5, 0))
        // console.log(await restar(5, 0))
        // console.log(await dividir(5, 0))
        // console.log(await multiplicar(5, 0))
    } catch(err) {
        console.log(err)
    }
}

operaciones()