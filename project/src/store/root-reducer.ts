import {combineReducers} from '@reduxjs/toolkit';
import {authorization} from './authorization/authorization';
import {data} from './data/data';
import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.data]: data,
  [NameSpace.authorization]: authorization,
});

export type RootState = ReturnType<typeof rootReducer>;
