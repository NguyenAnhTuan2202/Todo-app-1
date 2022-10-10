import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [userData, setUserData] = useState([]);
  const getData = (username, userage, id) => {
    setUserData((prevState) => {
      return [...prevState, { name: username, age: userage, id: id }];
    });
  };
  console.log(userData);
  return (
    <div>
      <AddUser getData={getData} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
