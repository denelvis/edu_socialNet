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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State changed");
  },

  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newPost) {
    this._state.profilePage.newPostText = newPost;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
