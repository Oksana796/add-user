import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const userHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    return;
  };

  return (
    <div>
      <AddUser onAddUser={userHandler} />;
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
