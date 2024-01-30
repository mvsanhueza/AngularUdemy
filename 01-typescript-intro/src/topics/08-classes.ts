
export class Person {
    // public name: string;
    // private address: string;

    // constructor(name: string, address: string){
    //     this.name = name;
    //     this.address = address; 
    // }

    constructor(public name: string, private address: string = 'No Address'){} //Forma corta
}

// export class Hero extends Person {
//     constructor (
//         public alterEgo: string, 
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New York');
//     }
// }


//Sin utilizar el extends en el Hero
export class Hero {
    constructor (
        public alterEgo: string, 
        public age: number,
        public realName: string,
        public person: Person,
    ){}
}

const tony = new Person('Tony Stark', 'New York');

const ironMan = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironMan);
