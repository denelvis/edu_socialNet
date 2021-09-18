const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: 'https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png',
    //   followed: false,
    //   fullName: "Dmitry Petrov",
    //   status: "Let's go",
    //   location: { city: "London", country: "UK" },
    // },
    // {
    //   id: 2,
    //   photoUrl: 'https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png',
    //   followed: true,
    //   fullName: "Sasha Sapogova",
    //   status: "Hi",
    //   location: { city: "Dallas", country: "USA" },
    // },
    // {
    //   id: 3,
    //   photoUrl: 'https://cdn.iconscout.com/icon/free/png-128/avatar-367-456319.png',
    //   followed: false,
    //   fullName: "Alex Dimitrov",
    //   status: "I'm out",
    //   location: { city: "Wellington", country: "NZ" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
