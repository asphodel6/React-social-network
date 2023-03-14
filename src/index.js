import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'I am the special one', likesCount: 16 },
  { id: 2, message: 'Lmao', likesCount: 148 },
]

let dialogs = [
  { id: 1, name: 'Daniil' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Grisha' },
  { id: 4, name: 'Emil' },
  { id: 5, name: 'Egor' },
  { id: 6, name: 'Vova' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Bye' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
