import { Component, Input, OnInit } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from "@syncfusion/ej2-angular-charts";
import { Browser } from "@syncfusion/ej2-base";
import * as _ from 'lodash';

@Component({
  selector: 'app-admit-chart',
  templateUrl: './admit-chart.component.html',
  styleUrls: ['./admit-chart.component.css']
})
export class AdmitChartComponent implements OnInit {

  @Input() admit: any = [];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: "DateTime",
    intervalType: "Days",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 }
  };

  public primaryYAxisadmit: Object = {
    rangePadding: "None",
    interval: 500,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
  }; 

  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public width: string = Browser.isDevice ? "100%" : "100%";
  public height: string = Browser.isDevice ? "100%" : "30%";
  public marker: Object = {
    // visible: true,
    height: 10,
    width: 10
  };
  public tooltip: Object = {
    enable: true
  };
  // custom code start

  public loadadmit(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(
        /-dark/i,
        "Dark"
      )
    );
  }
  // custom code end
  public title: string = "";
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
