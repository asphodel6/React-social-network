let rerenderEntireTree = () => {
}

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
