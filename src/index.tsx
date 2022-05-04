import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type MassagesDataType={
    id:string,
    massage:string,
    likesCount:string
}
export type DialogsDataType = {
    id:string,
    name:string
}
export type DialogsMassagesDataType = {
    id:string,
    message: string
}
export const MassagesData=[
    {id:'1', massage:'Hi, how are you?', likesCount:'0'},
    {id:'2', massage:'It\'s my first post', likesCount:'23'},
]
const DialogsData = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Sveta'},
    {id: '4', name: 'Victor'},
    {id: '5', name: 'Valera'}
]
const DialogsMassagesData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'Hi 2'},
    {id: '3', message: 'Hi Hi Hi'}
]
ReactDOM.render(
    <App MassagesData={MassagesData} DialogsData={DialogsData} DialogsMassagesData={DialogsMassagesData}/>,
  document.getElementById('root')
);