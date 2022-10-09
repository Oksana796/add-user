import React, { useState } from "react";
import "./AddUser.css";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div className="card">
      <form className="form" onSubmit={addUserHandler}>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="input"
          id="username"
          onChange={nameChangeHandler}
        />

        <label className="label" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          className="input"
          id="age"
          onChange={ageChangeHandler}
        />

        <button className="button" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
