import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Pablo Picasso",
      image:
        "https://www.revuedesdeuxmondes.fr/wp-content/uploads/2017/10/pablo-picasso-9440021-1-402-1024x1024.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
