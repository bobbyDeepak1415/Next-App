import axios from "axios";
import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: User[] = await response.json();

  return (
    <>
      <ul>
        {users.map((user) => {
          return <li></li>;
        })}
      </ul>
    </>
  );
};

export default UsersPage;
