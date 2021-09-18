const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newMessageText: "",
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            message: state.newMessageText.trim(),
          },
        ],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default messageReducer;
