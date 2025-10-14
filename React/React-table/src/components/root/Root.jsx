import React, { useState } from "react";
import "../root/root.css";
import FormComp from "../FormComp/FormComp";
import TableComp from "../TAbleComp/TableComp";

function Root() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <FormComp addUser={addUser} />
        <TableComp users={users} deleteUser={deleteUser} />
      </div>
    </>
  );
}

export default Root;
