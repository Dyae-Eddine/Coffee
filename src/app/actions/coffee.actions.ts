import { createAction,props } from '@ngrx/store';
import {ICoffee} from '../models/ICoffee';

export const getCoffee = createAction('[ICofee] Get Coffee');
export const getCoffeesSuccess = createAction('[ICoffee] Get Coffee Success',props<{coffees:ReadonlyArray<ICoffee>}>());
export const viewDetails = createAction('[ICofee] View Details', props<{coffeeId:number}>());