import {createStore, Store, Action, AnyAction, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import * as PolymerRedux from "polymer-redux"
import {reducers} from '../reducer'


export type YourStateType1 = object | null;
export type YourStateType2 = object | null;
export type StateType = {
  yourDataStore1: YourStateType1,
  yourDataStore2: YourStateType2,
}
export const store = createStore<StateType>(
  reducers,
  applyMiddleware(thunk)
);

// Create the PolymerRedux mixin
export const ReduxMixin = PolymerRedux.default<AnyAction, Store<StateType>>(store);
