import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Valera" },
];

const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How does the training go?" },
  { id: 3, message: "What's news?" },
];

const posts = [
  { id: 1, message: "Hi, how're you?", likesCount: 15 },
  { id: 2, message: "It's my first post!", likesCount: 20 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);
