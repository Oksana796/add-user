import React, { useState } from "react";

import "./AddUser.css";
//import ErrorModal from "./components/ErrorModal";

function AddUser(props) {
  return (
    <div className="card">
      <form className="form">
        <label className="label" htmlFor="username">
          Username
        </label>
        <input className="input" type="text" id="username"></input>

        <label className="label" htmlFor="age">
          Age
        </label>
        <input className="input" type="number" id="age"></input>

        <button className="button" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
