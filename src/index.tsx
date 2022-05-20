import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './State/ReduxStore';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>,
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);