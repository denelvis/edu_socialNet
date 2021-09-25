import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/default.webp";
import axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={classes.paginator}>
        {pages.map((page) => {
          return (
            <span
              className={`${
                props.currentPage === page && classes.selectedPage
              } ${classes.span}`}
              onClick={() => props.onPageChanged(page)}
              key={page}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="avatar"
                  className={classes.photo}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "7f3ec109-daae-4b5a-8c19-59f1d972056d",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0)
                          props.unfollow(user.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "7f3ec109-daae-4b5a-8c19-59f1d972056d",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0)
                          props.follow(user.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
