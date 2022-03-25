//tipi primitivi
let n1=5
let n2=10

let string1 = 'Javascript'

let n3 //non definita
let n4 = null

//PER VEDERE SE SONO NUMERI O LETTERE

console.log(typeof n1)
console.log(typeof n2)
console.log(typeof n3)
console.log(typeof n4)
console.log(typeof string1)

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(string1)

console.log(n1 == n2)
console.log(n1+n2)

let number1 = [1,2,3]
let number2 = [1,2,3]

console.log(number1)
console.log(number1 == number2)

//object
let userOne={
    nome:'Miniar',
    cognome: 'Ali',
    ruolo: 'Studente',
    nazione: 'Italia',
    classi:{
        biennio:[
            '1acm',
            '1amm'
        ],
        triennio:[
            '3aia',
            '4aia',
            '3bia'
        ]
    }
}

console.log(userOne)

//funzione matematiche

let x=9.5
const PI = Math.PI
console.log(PI)
console.log(Math.round(x))
console.log(Math.max(1,20,100,10,50))

let firstName='Miniar'
let lastName='Ali'
let country='Italy'
let space= ' '
let age=17
let job= 'Studente'
let city='Terni'
let subject='Informatica'
let fullName= firstName+space+lastName

console.log(fullName)

// console.log('Mi chiamo '+firstName+space+lastName)

console.log(`Mi chiamo ${firstName} ${lastName}`)
console.log(`sono ${firstName} vivo a ${city},${country}. sono uno ${job} di ${subject}`)

let y=3
let z=2
console.log(`${y} è più grande di ${z}:${y>z}`)