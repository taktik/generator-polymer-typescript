import {createStore, Store, Action} from 'redux'
import * as PolymerRedux from "polymer-redux"


export type StoreType = any
export const store = createStore((state = {}, action) => state);


// Create the PolymerRedux mixin
export const ReduxMixin = PolymerRedux.default<Action, Store<StoreType>>(store);