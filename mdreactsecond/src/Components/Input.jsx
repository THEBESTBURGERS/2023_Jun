// import React, { useState } from "react";

// export default function Input() {
//   const [text, setText] = useState('');
//   const onChange = e => {
//     setText(e.target.value);
//   }
//   const onReset = e => {
//     setText('');
//   }
//   return (
//     <div>
//       <input onChange={onChange} value={text}></input>
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값 : {text}</b>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";

export default function Input() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onReset = (e) => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={inputs.name}
        onChange={onChange}
        ref={nameInput}
      ></input>
      <input
        name="nickname"
        placeholder="닉네임"
        value={inputs.nickname}
        onChange={onChange}
      ></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {inputs.name}({inputs.nickname}) </b>
      </div>
    </div>
  );
}
