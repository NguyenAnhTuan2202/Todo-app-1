import React, { useState } from "react";
import Card from "../UI/Card";
import styled from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input field",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid input age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.getData(userName, userAge, Math.random());
    setUserName("");
    setUserAge("");
  };
  const enterUsernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const enterAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const cancelHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          cancelHandler={cancelHandler}
        />
      )}
      <Card class={styled.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            onChange={enterUsernameHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years):</label>
          <input
            id="age"
            type="number"
            onChange={enterAgeHandler}
            value={userAge}
          />
          <Button type="submit" title="Add User"></Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
