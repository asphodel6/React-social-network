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
    },
    profilePage: {
      posts: [
        { id: 1, message: "I am the special one", likesCount: 16 },
        { id: 2, message: "Lmao", likesCount: 148 },
      ],
      newPostText: "musho-gracias",
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
