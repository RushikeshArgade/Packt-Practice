import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid Username',
        message:"Please enter valid Data."
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title:'Invalid Age',
        message:"Please enter valid Age (>0)."
      });
      return;
    }
    // console.log(enteredUserName, enteredAge);
    props.onAddNewUser(enteredUserName, enteredAge );
    setEnteredUserName("");
    setEnteredAge("");
  };

  const usernameChangHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = ()=>{
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userame">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUserName}
          onChange={usernameChangHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangHandler}
        />
        <button type="submit"> Add User </button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
