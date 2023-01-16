import React, {Dispatch} from 'react';
import {useDispatch} from "react-redux";
import {RootDispatch} from "../redux";
import {ActionType} from "../redux/reducer";
import {ThunkDispatch} from "@reduxjs/toolkit";

const useAppDispatch :()=> Dispatch<ActionType> = useDispatch;

export const useAppDispatch:()=>ThunkDispatch<State, undefined, ActionType>& Dispatch<ActionType>=useDispatch;

export default useAppDispatch;
