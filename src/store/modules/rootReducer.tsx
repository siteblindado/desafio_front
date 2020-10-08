import { combineReducers } from 'redux';
import { dataReducer } from './test/reducer';

const rootReducer = combineReducers({ data: dataReducer });

export default rootReducer;
