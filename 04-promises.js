let is_ok = false;

let dinero = 1000;

let calcularDinero = (dinero) => {
    return dinero*1.10;
}

let prestamo = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task)
            } else {
                reject("Error")
            }
        }, time);
    });
}

prestamo(5000, calcularDinero(dinero))
    .then(datos => {console.log(datos)})
    .catch(err => console.log(err))