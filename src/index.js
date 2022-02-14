import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

const unsubscribe = store.subscribe(() => {
    console.log("subscribe : " + store.getState());
});

console.log(store);
console.log(store.getState());
store.dispatch(addTodo('coding'));
unsubscribe();
store.dispatch(addTodo('eat'));
store.dispatch(addTodo('read book'));
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
