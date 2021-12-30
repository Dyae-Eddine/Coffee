import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';

const routes: Routes = [
  { path:'coffee', component: CoffeeListComponent },
  { path: 'coffee/:id', component:CoffeeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
