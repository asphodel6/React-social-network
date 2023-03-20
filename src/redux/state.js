import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Bye" },
      ],
      dialogs: [
        { id: 1, name: "Daniil" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Grisha" },
        { id: 4, name: "Emil" },
        { id: 5, name: "Egor" },
        { id: 6, name: "Vova" },
      ],
      newMessageBody: ""
    },
    profilePage: {
      posts: [
        { id: 1, message: "I am the special one", likesCount: 16 },
        { id: 2, message: "Lmao", likesCount: 148 },
      ],
      newPostText: "musho-gracias",
    },
    sidebar: {}
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
