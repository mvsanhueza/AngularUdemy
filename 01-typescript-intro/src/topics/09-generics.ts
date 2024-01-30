
//Generico es para que se defina según el dato que uno ingrese

//El primero es con valor T, entonces el argumento y retorno debe ser el mismo
export function whatsMyType<T>(argument: T): T{

    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo'); 
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

