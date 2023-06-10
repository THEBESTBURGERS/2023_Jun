
// interface User {
//   name: string;
//   id: number;
// }

// class UserAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user :User = new UserAccount("qhrud", 1)

// console.log(user.name, user.id)


// interface User {
//     name : string;
//     id : number;
// }

// // 리턴값
// function getAdminUser() : User{

// }

// function deleteUser(user : User ){

// }


// type WindowState = "open" | "closed" | "minimized";
// type LockState = "locked" | "unlocked";
// type PositiveOddNumbersUnderTen = 1|3|5|7|9;


// function getLength(obj : string | string[]){
//     return obj.length
// }



// function wrapInArray(obj : string | string[]){
//     if(typeof obj === 'string'){
//         return [obj];
//     }
//     return obj;
// }


// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{name : string}>;

// interface BackPack<Type>{
//     add : (obj : Type) => void;
//     get : () => Type;

// }

// declare const backpack : BackPack<string>;

// const object = backpack.get();
// console.log(object);
// backpack.add("보경");


interface Point {
  x : number;
  y : number;
}

function logPoint(p : Point){
  console.log(`${p.x},${p.y}`);
}

// const point = {x :12, y : 26};
// logPoint(point);

// const point3 = {x : 12, y : 26, z : 89};
// logPoint(point3);

// const rect = {x : 33, y:3, width : 30, height : 80};
// logPoint(rect)


class VirtualPoint {
  x : number;
  y : number;

  constructor(x : number, y :number){
      this.x = x;
      this.y = y;
  }
}

const newPoint = new VirtualPoint(13, 56);
logPoint(newPoint);


