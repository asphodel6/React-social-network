import { combineReducers, legacy_createStore as createStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
