import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how're you?", likesCount: 15 },
        { id: 2, message: "It's my first post!", likesCount: 20 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        {
          id: 1,
          name: "Dimych",
          avatar:
            "https://media.istockphoto.com/vectors/cute-smiling-bear-muzzle16x16-pixel-art-icon-isolated-on-white-chat-vector-id1147096624",
        },
        {
          id: 2,
          name: "Andrey",
          avatar:
            "https://cdn.dribbble.com/users/1061842/screenshots/2942741/ironman.png",
        },
        {
          id: 3,
          name: "Sveta",
          avatar:
            "https://cdn.dribbble.com/users/1061842/screenshots/2942741/ironman.png",
        },
        {
          id: 4,
          name: "Sasha",
          avatar:
            "https://cdn.dribbble.com/users/1061842/screenshots/2942741/ironman.png",
        },
        {
          id: 5,
          name: "Victor",
          avatar:
            "https://cdn.dribbble.com/users/1061842/screenshots/2942741/ironman.png",
        },
        {
          id: 6,
          name: "Valera",
          avatar:
            "https://cdn.dribbble.com/users/1061842/screenshots/2942741/ironman.png",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How does the training go?" },
        { id: 3, message: "What's news?" },
      ],
      newMessageText: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("State changed");
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
window.store = store;
export default store;
