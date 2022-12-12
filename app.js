function planBuyCar(Money) {
    return new Promise( (resolve, reject) => {
        if (Money > 500) {
            resolve("let go!")
        } else {
            reject(`you need more ${500 - Money}!`)
        }
    })
}

planBuyCar(100)
.then((resolve) => console.log(resolve))
.catch(err => console.log(err))