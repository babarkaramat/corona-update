import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { CasesComponent } from './components/cases/cases.component';
import { DeathComponent } from './components/death/death.component';
import { AdmitComponent } from './components/admit/admit.component';
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    CasesComponent,
    DeathComponent,
    AdmitComponent,
    TestComponent,

    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
