import React from "react";
import "../TAbleComp/table.css";

function TableComp({ users, deleteUser }) {
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th className="btn-th"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, index) => (
            <tr key={index}>
              <td>{usr.name}</td>
              <td>{usr.age}</td>
              <td className="btn-td">
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableComp;
