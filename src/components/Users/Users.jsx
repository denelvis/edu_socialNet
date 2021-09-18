import React from "react";
import classes from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png",
        followed: false,
        fullName: "Dmitry Petrov",
        status: "Let's go",
        location: { city: "London", country: "UK" },
      },
      {
        id: 2,
        photoUrl:
          "https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png",
        followed: true,
        fullName: "Sasha Sapogova",
        status: "Hi",
        location: { city: "Dallas", country: "USA" },
      },
      {
        id: 3,
        photoUrl:
          "https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png",
        followed: false,
        fullName: "Alex Dimitrov",
        status: "I'm out",
        location: { city: "Wellington", country: "NZ" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} alt="avatar" className={classes.photo} />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
