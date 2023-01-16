import {reducer} from './reducer'
import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'


const store=configureStore({
    reducer:{
        counter:reducer
    },
});



export type RootState=ReturnType<typeof store.getState>
export type RootDispatch=typeof store.dispatch;

//castoms Hooks


