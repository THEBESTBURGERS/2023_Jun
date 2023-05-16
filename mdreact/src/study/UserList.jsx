// import React from "react";

// function User({ user }) {
//   return (
//     <div>
//       <b>{user.username}</b> <span>({user.email})</span>
//     </div>
//   );
// }

// export default function UserList() {
//   const users = [
//     {
//       id: 1,
//       username: "velopert",
//       email: "public.velopert@gmail.com",
//     },
//     {
//       id: 2,
//       username: "tester",
//       email: "tester@example.com",
//     },
//     {
//       id: 3,
//       username: "liz",
//       email: "liz@example.com",
//     },
//   ];

//   return (
//     <div>
//       {users.map((user) => (
//         <User user={user} key={user.id} /> //
//       ))}
//     </div>
//   );
// }

// import React from "react";

// function User({ user, onRemove, onToggle }) {
//   return (
//     // <div>
//     //   <b>{user.username}</b> <span>({user.email})</span>
//     //   <button onClick={() => onRemove(user.id)}>삭제</button>
//     // </div>
//     <div>
//       <b
//         style={{
//           cursor: "pointer",
//           color: user.active ? "green" : "black",
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// export default function UserList({ users, onRemove, onToggle }) {
//   return (
//     <div>
//       {users.map((user) => (
//         <User
//           user={user}
//           key={user.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// }


// import React, { useEffect } from 'react';

// function User({ user, onRemove, onToggle }) {
//   useEffect(() => {
//     console.log('컴포넌트가 화면에 나타남');
//     return () => {
//       console.log('컴포넌트가 화면에서 사라짐');
//     };
//   }, []);
//   return (
//     <div>
//       <b
//         style={{
//           cursor: 'pointer',
//           color: user.active ? 'green' : 'black'
//         }}
//         onClick={() => onToggle(user.id)}
//       >
//         {user.username}
//       </b>
//       &nbsp;
//       <span>({user.email})</span>
//       <button onClick={() => onRemove(user.id)}>삭제</button>
//     </div>
//   );
// }

// export default function UserList({ users, onRemove, onToggle }) {
//   return (
//     <div>
//       {users.map(user => (
//         <User
//           user={user}
//           key={user.id}
//           onRemove={onRemove}
//           onToggle={onToggle}
//         />
//       ))}
//     </div>
//   );
// }


import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);