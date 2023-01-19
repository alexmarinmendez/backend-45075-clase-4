const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 == 0 || num2 == 0) reject('Operacion innecesaria')
        else resolve(num1 + num2)
    })
}

async function calculos() {
    try {
        console.log(await sumar(0, 4))
    } catch(err) {
        console.log(err)
    }
}

calculos()