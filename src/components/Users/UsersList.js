import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  //console.log(props.users[0].name);
  return (
    <Card>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
