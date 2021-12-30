import { ICoffee } from "../models/ICoffee";
import { createReducer, on} from '@ngrx/store';
import {getCoffee, getCoffeesSuccess} from '../actions/coffee.actions';


export interface CoffeeState{
    coffees : ReadonlyArray<ICoffee>;
}

const initialState:ReadonlyArray<ICoffee> = [];

export const coffeeReducer = createReducer(
    initialState,
    on(getCoffeesSuccess, (state,{coffees}) => [...coffees]),
);