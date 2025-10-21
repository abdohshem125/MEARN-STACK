import React, { useState } from "react";
import "../FormComp/Form.css";

function FormComp({ addUser }) {
  const [inputData, setInputData] = useState({ name: "", age: "" });

  const handelChange = (e) => {
    console.log(e.target.value);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    addUser(inputData);
    setInputData({ name: "", age: "" });
  };

  return (
    <>
      <form action="" className="form" onSubmit={handelSubmit}>
        <input
          value={inputData.name}
          name="name"
          onChange={handelChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={inputData.age}
          name="age"
          onChange={handelChange}
          type="text"
          placeholder="Age"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default FormComp;
