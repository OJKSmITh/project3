import { combineReducers } from 'redux';
import {user} from "./user"
import { email } from './email';
import { chat } from './chat';

export const rootReducer = combineReducers({
    user,
    email,
    chat
})