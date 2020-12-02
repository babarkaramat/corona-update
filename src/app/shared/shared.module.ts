
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TooltipModule,/*  createSpinner, showSpinner, hideSpinner */ } from '@syncfusion/ej2-angular-popups';
import { AccordionModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipModule, ToolbarModule, AccordionModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,
  ],
  declarations: [],
  providers: [],
  exports: [TooltipModule, ToolbarModule, AccordionModule,
    ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule,]
})
export class SharedModule {}