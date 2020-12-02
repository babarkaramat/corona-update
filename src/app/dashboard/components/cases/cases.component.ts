import { Store } from '@ngrx/store';
// import { AppState } from './../../app.state';

import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { format } from 'util';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';
import { CasesModel } from 'src/app/models/cases.model';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CasesComponent implements OnInit {
  cases: any = [];
  @ViewChild('tooltip')
  public control: TooltipComponent;
  RollingRate: any = [];

  constructor(private service: DataService, private router: Router,
    private store: Store<AppState>
  ) {

  }


  ngOnInit() {
    forkJoin(this.service.getCases().pipe(map(x => { return x.body; })),
      this.service.newCasesBySpecimenDateRollingRate().pipe(map(x => { return x.body; }))
    ).subscribe((res: any) => {
      this.cases = res[0];
      this.RollingRate = res[1].filter(x => x.newCasesBySpecimenDateRollingRate != null)
    })
  }
  getdate(i) {
    return this.cases[i] && this.cases[i].date || '';
    // return this.cases[i] ? this.cases[i].date : '';

  }
  getvalue(i, j) {
    let value = 0
    for (let index = i; index <= j; index++) {
      value += this.cases[index] && +this.cases[index].newCasesByPublishDate || 0;

    }
    return value;
  }
  AddCasesData() {
    var cas = []
    this.cases.forEach(element => {
      let casObj = {
        date: element.date,
        newCasesByPublishDate: element.newCasesByPublishDate
      }
      cas.push(casObj)
    });
    this.store.dispatch({
      type: 'cases',
      payload: <CasesModel>{
        cases: cas
      }
    });
    this.router.navigate(['dashboard/' + 'cases']);
  }

  getPercentage() {
    var value = ((this.getvalue(7, 13) - this.getvalue(0, 6)) / this.getvalue(7, 13)) * 100
    return value.toFixed(1);
  }

}
