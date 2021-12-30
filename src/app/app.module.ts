import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CoffeeServiceService } from './services/coffee-service.service';
import {NgxPaginationModule, PaginatePipe} from 'ngx-pagination';
import {StoreModule} from '@ngrx/store';
import { coffeeReducer } from './reducers/coffee.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './effects/coffee.effects';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({
      coffees:coffeeReducer
    }),
    StoreDevtoolsModule.instrument({maxAge:25,logOnly:environment.production}),
    EffectsModule.forRoot([CoffeeEffects]),
  ],
  providers: [CoffeeServiceService],
  bootstrap: [AppComponent],
  exports: [NgxPaginationModule]
})
export class AppModule {  }
