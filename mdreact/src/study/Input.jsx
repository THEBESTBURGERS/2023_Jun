// import React, { useState } from "react";

// export default function Input() {
//   const [text, setText] = useState("");
//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };
//   const handleReset = () => {setText('')};
//   return (
//     <div>
//       <input onChange={handleTextChange} value={text} />
//       <button onClick={handleReset}>초기화</button>
//       <div>
//         <b>값 : {text}</b>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Input() {
  const [inputs, setInput] = useState({ name: "", nickname: "" });

  const { name, nickname } = inputs;
  const onChange = (e) => {
    const {value, name} = e.target;
    setInput({...inputs , [name] : value})
  };

  const onReset = () => {setInput({ name: "", nickname: "" })};

  return (
    <div>
      <input placeholder="이름" name="name" value={name} onChange={onChange}/>
      <input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} {nickname}
      </div>
    </div>
  );
}
