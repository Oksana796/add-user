import React from "react";
import './AddUser.css';
import './UsersList.css';

function UsersList(props) {
  return (
    <div className="card users">
      <ul className="ul">
        {props.users.map((user) => (
          <li className="li" key={user.id}>
            {user.name} {user.age} y.o.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
