import {combineReducers, createStore} from 'redux';
import {ProfilePageReducer} from './ProfilePageReducer';
import {DialogsPageReducer} from './DialogsPageReducer';

let reducers=combineReducers({
    ProfilePage:ProfilePageReducer,
    DialogsPage:DialogsPageReducer
})
export let store = createStore(reducers);
