import { combineReducers } from 'redux';
import {user} from "./user"
import { email } from './email';

export const rootReducer = combineReducers({
    user,
    email
})