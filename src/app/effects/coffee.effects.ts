import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { CoffeeServiceService } from "../services/coffee-service.service";
import { getCoffee, getCoffeesSuccess } from '../actions/coffee.actions'
import { catchError, EmptyError, exhaustMap, map } from "rxjs";

@Injectable()
export class CoffeeEffects{
    getCoffee$ = createEffect(() => this.actions$.pipe(ofType(getCoffee),
    exhaustMap(() => this._coffeeService.getCoffee().pipe(
        map((coffees) => getCoffeesSuccess({coffees}))
    )
    )));

    constructor(private actions$ : Actions,private _coffeeService:CoffeeServiceService){}
}