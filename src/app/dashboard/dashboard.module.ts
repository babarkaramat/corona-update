import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { CasesComponent } from './components/cases/cases.component';
import { DeathComponent } from './components/death/death.component';
import { AdmitComponent } from './components/admit/admit.component';
import { TestComponent } from './components/test/test.component';
import { TestChartComponent } from './components/test-chart/test-chart.component';
import { CasesChartComponent } from './components/cases-chart/cases-chart.component';
import { DeathChartComponent } from './components/death-chart/death-chart.component';
import { AdmitChartComponent } from './components/admit-chart/admit-chart.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';



@NgModule({
  declarations: [
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
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
