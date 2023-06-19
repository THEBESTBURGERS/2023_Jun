interface User {
  name: string;
  id: number;
}

// const user: User = {
//   name: "qhrud",
//   id: 1,
// };


class UserAccount {
  name : string;
  id : number;
  constructor(name:string, id : number){
    this.name = name;
    this.id = id;
  }
}

const user : User = new UserAccount("qhrud", 1);

function getAdminUser() : User {

}


function deleteUser(user : User){
  
}