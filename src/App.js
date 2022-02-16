import "./styles.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";
export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUserHandler = (name, age)=>{
    console.log(usersList);
    setUsersList((prevState)=>{
      return [...prevState, {id:Math.random().toString(), name, age}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddNewUser = {addNewUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}
