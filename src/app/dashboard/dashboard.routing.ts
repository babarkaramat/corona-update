import { death } from './../reducer/death.reducer';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailsComponent } from '../shared/details/details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: ':type',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
