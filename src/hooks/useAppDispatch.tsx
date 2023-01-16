import React from 'react';
import {useDispatch} from "react-redux";
import {RootDispatch} from "../redux";

const useAppDispatch : () => RootDispatch = useDispatch;

export default useAppDispatch;
