import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/New/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from "./components/Users/UsersContainer";

const App = () => {
      return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/profile" render={() =><Profile/>}/>
                    <Route exact path="/dialogs" render={()=><DialogsContainer/>}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="/music" component={() => <Music/>}/>
                    <Route exact path="/setting" component={() => <Setting/>}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;