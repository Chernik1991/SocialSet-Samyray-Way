import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/New/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';

const App = () => {
      return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userID" render={() =><ProfileContainer/>}/>
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