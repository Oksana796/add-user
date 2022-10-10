import React, { useState } from "react";
import "./AddUser.css";
import ErrorModal from "./ErrorModal";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", message: "Please enter a valid age" });
      return;
    }

    //to reset
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
            value={enteredName} //for reset
          />

          <label className="label" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            className="input"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge} //for reset
          />

          <button className="button" type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
