const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how're you?", likesCount: 15 },
    { id: 2, message: "It's my first post!", likesCount: 20 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state, posts: [...state.posts] };
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: state.newPostText.trim(),
            likesCount: 0,
          },
        ],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPost,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPost: text,
});

export default profileReducer;
