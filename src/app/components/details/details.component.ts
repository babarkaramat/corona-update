import { Component, OnInit } from '@angular/core';
import { ChartTheme, ILoadedEventArgs, IResizeEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from "@syncfusion/ej2-base"; import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  death: any = [];
  cases: any = [];
  admit: any = [];
  test: any = [];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: "DateTime",
    intervalType: "Days",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    rangePadding: "None",
    interval: 5000,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  public primaryYAxisTest: Object = {
    rangePadding: "None",
    interval: 50000,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  public marker: Object = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#111111' } } }
  public titleCases: string = 'Cases by specimen date';
  public titleDeath: string = 'Deaths within 28 days of positive test by date of death';
  public titleAdmit: string = 'Patients admitted to hospital';
  public titleTest: string = 'Virus tests conducted';
  public tooltip: Object = {
    enable: true
  };
  type: any;
  direct = 1;
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    if (selectedTheme === 'highcontrast') {
      args.chart.series[0].marker.dataLabel.font.color = '#000000';
    }
  };
  // custom code end
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public width: string = Browser.isDevice ? '100%' : '100%';

  constructor(private store: Store<AppState>, private service: DataService, private route: ActivatedRoute,) {
    // this.service.getDeath().subscribe((res: any) => {
    //   this.death = res.data;
    // })
    // setTimeout(() => {
    // forkJoin(
    // this.store.select(state => state.cases),
    this.type = this.route.snapshot.params;
    // setTimeout(() => {

    if (!isNullOrUndefined(this.type)) {
      if (this.type.type == 'cases') {
        this.store.select(state => state.cases).subscribe(cas => {
          if (cas.length > 0) {
            this.reset();
            this.cases = _.cloneDeep(cas[0].cases)
            this.direct = 0
          }
        });
      }
      if (this.type.type == 'death') {
        this.store.select(state => state.death).subscribe(dea => {
          if (dea.length > 0) {
            this.reset();
            this.death = _.cloneDeep(dea[0].death)
            this.direct = 0
          }
        });
      }
      if (this.type.type == 'admit') {
        this.store.select(state => state.admit).subscribe(adm => {
          if (adm.length > 0) {
            this.reset();
            this.admit = _.cloneDeep(adm[0].admit)
            this.direct = 0
          }
        });
      }
      if (this.type.type == 'test') {
        this.store.select(state => state.test).subscribe(tes => {
          if (tes.length > 0) {
            this.reset();
            this.test = _.cloneDeep(tes[0].test)
            this.direct = 0
          }
        });
      }
    }
    // }, 50);


  }
  reset() {
    this.cases = [];
    this.death = [];
    this.admit = [];
    this.test = [];
  }
  ngOnInit() {
    // setTimeout(() => {

    if (this.type.type == 'cases' && this.direct == 1) {
      this.service.getCases().pipe(map(x => { return x.data })).subscribe((res: any) => {
        this.cases = res;
      })
    }

    if (this.type.type == 'death' && this.direct == 1) {
      this.service.getDeath().subscribe((res: any) => {
        this.death = res.data;
      })
    }
    if (this.type.type == 'admit' && this.direct == 1) {
      this.service.getAdmit().subscribe((res: any) => {
        this.admit = res.data;
      })
    }
    if (this.type.type == 'test' && this.direct == 1) {
      this.service.getTest().subscribe((res: any) => {
        this.test = res.data;
      })
    }
    // }, 1000);
  }

}
