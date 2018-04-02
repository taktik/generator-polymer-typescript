
import {StateType, YourStateType1, YourStateType2} from '../store'
import {YourAction} from '../action'
import {Action, AnyAction, Reducer, combineReducers} from 'redux'



export const subStateReducer1: Reducer<YourStateType1> =
    (state:YourStateType1 = {list:[], dataRemain: false}, action: AnyAction) => {

        // TODO add you logic
        return state;
    };

export const subStateReducer2: Reducer<YourStateType2> =
    (state:YourStateType2 = null, action: AnyAction) => {
      // TODO add you logic
        return state;
    };



export const reducers = combineReducers<StateType>({
  subStateReducer1,
  subStateReducer2,
});
