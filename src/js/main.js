//Condicionales

//IF-ELSE

const nombre = 'Juan'

if(nombre=='Juan'){
    console.log('Hola',nombre)
}

console.group('Condicional if-else')

const minEdadParaBeber = 18
const miEdad = 30

if((miEdad < minEdadParaBeber) && (miEdad > 0)){
    console.error('Debes ser mayor de edad para beber')
}else{
    console.warn('Puedes beber, pero cuídate del ejércicto')
}

console.groupEnd()

console.group('Ejercicio Condicional if-else')

const username = prompt(('Escribe aqui tu usuario: ').toLowerCase())
const password = prompt(('Escribe aqui tu contraseña: '))

const actualUsername = 'rodribaena12'
const actualPassword = 'Rod123'

if((username == actualUsername) && (password == actualPassword)){
    console.info('Welcome '+username+'. Enjoy our webpage.')
}else{
    console.error('Oops! We could not log you in. Try again changing what you wrote before.')
}

console.groupEnd()

//IF-ELSE-IF

let num = Math.round(Math.random()*((5 - (-5)) + (-5)));

if(num==0){
    console.log(num,'es un numero neutro');
}else if (num<0){
    console.log(num,'es un numero menor que cero');
}else{
    console.log(num,'es un numero mayor que cero');
}

const tabla=2

for (let i=1;i<11;i++){
    console.log(`${tabla} X ${i} = ${tabla*i}`)
}

let j=1
while (i<=10){
    console.log(`${tabla} X ${j} = ${tabla*j}`)
    j++
}

