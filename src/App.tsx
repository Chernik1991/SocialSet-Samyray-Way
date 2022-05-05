import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/New/News';
import {Music} from './components/Music/Music';
import {Setting} from './components/Setting/Setting';
import {StateType,} from './State/State';

type AppType={
    State:StateType
}
const App = (props:AppType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path='/profile' render={()=><Profile PostsData={props.State.ProfilePage.PostsData}/>}/>
                    <Route exact path='/dialogs' render={()=><Dialogs DialogsData={props.State.DialogsPage.DialogsData} DialogsMassagesData={props.State.DialogsPage.DialogsMassagesData}/>}/>
                    <Route exact path='/news' render={()=><News/>}/>
                    <Route exact path='/music' component={()=><Music/>}/>
                    <Route exact path='/setting' component={()=><Setting/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;