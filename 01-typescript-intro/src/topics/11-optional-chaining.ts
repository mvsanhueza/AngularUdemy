export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melisa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0; 
    // const howManyChildren = passenger.children!.length  //Con exclamasión se le dice a typescript que siempre recibirá un número

    console.log(passenger.name, howManyChildren);
    
    return howManyChildren
}

printChildren(passenger1)