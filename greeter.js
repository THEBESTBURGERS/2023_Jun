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
var Color;
(function (Color) {
    Color[Color["r"] = 0] = "r";
    Color[Color["g"] = 1] = "g";
    Color[Color["b"] = 2] = "b";
})(Color || (Color = {}));
var a = Color.b;
document.body.textContent = a.toString();
