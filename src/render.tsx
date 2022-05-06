import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from './State/State';
import {BrowserRouter} from 'react-router-dom';



export const rerenderEntireTree = (State:StateType) => {
        ReactDOM.render(
        <BrowserRouter>
            <App State={State} addPost={addPost}/>,
        </BrowserRouter>,
    document.getElementById('root'));
}