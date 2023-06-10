// function greeter(person : string) {
//   return "Hello, " + person;
// }

// let user = "k";

// document.body.textContent = greeter(user);

// interface Person {
//   first : string;
//   last : string;
// }

// function greeter(person : Person){
//   return "Hello, " + person.first + " " + person.last;
// }

// let user = {first : "k", last : "2"}

// document.body.textContent = greeter(user);

// class Student {
//   fullName: string;
//   constructor(
//     public firstName: string,
//     public middleInitial: string,
//     public lastName: string
//   ) {
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName + "ㅋㅋ";
// }

// let user = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user);

// enum Color {r, g, b}

// let a : number = Color.b

// document.body.textContent = a.toString();

// declare function create(o : object |null) : void;

// create({prop : 0})

// let someValue : any = 'this is a string';

// let strlength : number = (<string>someValue).length;

// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }

// let myObj = {size : 10, label : "size 10 object"};

// printLabel(myObj);

// interface LabeleValue {
//   label: string;
// }

// function printLabel(labeledObj: LabeleValue) {
//   console.log(labeledObj.label);
// }

// let myObj = { size: 10, label: "size 10 object" };

// printLabel(myObj);

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//       // Error: Property 'clor' does not exist on type 'SquareConfig'
//       newSquare.color = config.clor;
//   }
//   if (config.width) {
//       newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config : SquareConfig) : {color:string; area:number}{

// }

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// function add(x: number, y: number): number {
//   return x + y;
// }

// let myadd: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };


interface Card {
  suit : string;
  card : number;
}
interface Deck {
  suits : string[];
  cards : number[];
  createCardPicker(this : Deck): () => Card;
}
let deck : Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this : Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();


