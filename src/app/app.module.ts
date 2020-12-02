
import { DataService } from './services/data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { casesReducer } from './reducer/cases.reducer';
import { deathReducer } from './reducer/death.reducer';
import { admitReducer } from './reducer/admit.reducer';
import { testReducer } from './reducer/test.reducer';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ cases: casesReducer, death: deathReducer, admit: admitReducer, test: testReducer }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
