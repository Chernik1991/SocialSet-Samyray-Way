import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './State/ReduxStore';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);