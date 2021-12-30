import { Component } from '@angular/core';
import { CoffeeServiceService } from './services/coffee-service.service';
import { StoreModule, Store } from '@ngrx/store';
import {ICoffee} from './models/ICoffee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public coffees : ICoffee[] = [];
  title = 'Coffee Project';

  constructor(private _coffeeService : CoffeeServiceService){

  }

}
