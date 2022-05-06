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
import {addPost, StateType,} from './State/State';

type AppType = {
    State: StateType
    addPost:(postMassage:string)=>void
}
const App = (props: AppType) => {

    const ProfilePostsData = () => {
        return (
            <Profile PostsData={props.State.ProfilePage.PostsData} addPost={addPost}/>
        )
    }
    const DialogsDialogsData = () => {
        return (
            <Dialogs
                DialogsData={props.State.DialogsPage.DialogsData}
                DialogsMassagesData={props.State.DialogsPage.DialogsMassagesData}/>
        )
    }
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/profile" render={ProfilePostsData}/>
                    <Route exact path="/dialogs" render={DialogsDialogsData}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="/music" component={() => <Music/>}/>
                    <Route exact path="/setting" component={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;