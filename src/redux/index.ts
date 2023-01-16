import {reducer, red, ActionType} from './reducer'
import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import {Action, configureStore} from '@reduxjs/toolkit';

type State={
    counter:{
        value:number;
    };

}

const store=configureStore<State,ActionType>({
    reducer:{
        counter:red
    },
});



export type RootState=ReturnType<typeof store.getState>
export type RootDispatch=typeof store.dispatch;

