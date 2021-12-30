import { Component, NgModule, OnInit, Pipe } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { getCoffee } from 'src/app/actions/coffee.actions';
import { AppModule } from 'src/app/app.module';
import { CoffeeState } from 'src/app/reducers/coffee.reducers';


@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  //public coffees : ICoffee[] = [];
  public coffees$ = this.store.select('coffees');
  p : number=1;
  constructor(private router: Router, private store : Store<CoffeeState>) { }

  ngOnInit(): void {
      this.store.dispatch(getCoffee());
  }

}
