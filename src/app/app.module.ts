import { TestChartComponent } from './components/test-chart/test-chart.component';
import { AdmitChartComponent } from './components/admit-chart/admit-chart.component';
import { DeathChartComponent } from './components/death-chart/death-chart.component';
import { DataService } from './services/data.service';
import { DetailsComponent } from './components/details/details.component';
import { TestComponent } from './components/test/test.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesComponent } from './components/cases/cases.component';
import { SharedModule } from './shared/shared.module';
import { DeathComponent } from './components/death/death.component';
import { AdmitComponent } from './components/admit/admit.component';
import { StoreModule } from '@ngrx/store';
import { casesReducer } from './reducer/cases.reducer';
import { deathReducer } from './reducer/death.reducer';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CasesChartComponent } from './components/cases-chart/cases-chart.component';
import { admitReducer } from './reducer/admit.reducer';
import { testReducer } from './reducer/test.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CasesComponent,
    DeathComponent,
    AdmitComponent,
    TestComponent,
    TestChartComponent,
    CasesChartComponent,
    DeathChartComponent,
    AdmitChartComponent,
    DetailsComponent,
    DashboardComponent
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
