
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TooltipModule,/*  createSpinner, showSpinner, hideSpinner */ } from '@syncfusion/ej2-angular-popups';
import { AccordionModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { TestChartComponent } from './test-chart/test-chart.component';
import { CasesChartComponent } from './cases-chart/cases-chart.component';
import { DeathChartComponent } from './death-chart/death-chart.component';
import { AdmitChartComponent } from './admit-chart/admit-chart.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipModule, ToolbarModule, AccordionModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
  ],
  declarations: [    
    TestChartComponent,
    CasesChartComponent,
    DeathChartComponent,
    AdmitChartComponent,
    DetailsComponent,],
  providers: [],
  exports: [TooltipModule, ToolbarModule, AccordionModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
    TestChartComponent,
    CasesChartComponent,
    DeathChartComponent,
    AdmitChartComponent,
    DetailsComponent]
})
export class SharedModule {}