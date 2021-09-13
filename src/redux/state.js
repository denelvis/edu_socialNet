let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how're you?", likesCount: 15 },
      { id: 2, message: "It's my first post!", likesCount: 20 },
    ],
  },

  messagesPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How does the training go?" },
      { id: 3, message: "What's news?" },
    ],
  },
};

export default state;
