let rerenderEntireTree = () => {};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newPost) => {
  state.profilePage.newPostText = newPost;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
  state.messagesPage.newMessageText = newMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
