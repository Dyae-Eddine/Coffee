import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeeServiceService } from 'src/app/services/coffee-service.service';
import { ICoffee } from 'src/app/models/ICoffee';
import { Store } from '@ngrx/store';
import { getCoffee } from 'src/app/actions/coffee.actions';
import { CoffeeState } from 'src/app/reducers/coffee.reducers';
@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent implements OnInit {
  public coffees$ = this.store.select('coffees');
  obj : ICoffee = {} as ICoffee;
  constructor(private route : ActivatedRoute, private store:Store<CoffeeState>) { 
  }

  ngOnInit(): void {
      this.getCoffeeById();
  }

  // Getting Coffee By Id From coffees$ observable and assigning the clicked object to 'obj' in order to pass it to the template
  getCoffeeById(){
    let id = +this.route.snapshot.paramMap.get('id');
        this.coffees$.subscribe(list => list.forEach(((e) => {
          if(e.id === id){
            this.obj = <ICoffee> e;
          }
        })))
  }

}
