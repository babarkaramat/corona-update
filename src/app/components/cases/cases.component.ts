import { Store } from '@ngrx/store';
// import { AppState } from './../../app.state';

import { CasesModel } from '../../models/cases.model';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { format } from 'util';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';
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

  constructor(private service: DataService, private router: Router,
    private store: Store<AppState>
  ) {

  }


  ngOnInit() {

    this.service.getCases()
      .pipe(
        map(x => { return x.data; }))
      .subscribe((res: any) => {
        this.cases = res;
      })
  }
  getdate(i) {
    let date = ""
    this.cases.forEach((element, index) => {
      if (index == i) {
        date = element.date;
      }
    });
    return date;
  }
  getvalue(i, j) {
    let value = 0
    this.cases.forEach((element, index) => {
      if (index >= i && index <= j) {
        value += +element.newCases;
      }
    });
    return value;
  }
  AddCasesData() {
    var cas = []
    this.cases.forEach(element => {
      let casObj = {
        date: element.date,
        newCases: element.newCases
      }
      cas.push(casObj)
    });
    this.store.dispatch({
      type: 'cases',
      payload: <CasesModel>{
        cases: cas
      }
    });
    this.router.navigate(['details/' + 'cases']);
  }

  getPercentage() {
    var value = ((this.getvalue(7, 13) - this.getvalue(0, 6)) / this.getvalue(7, 13)) * 100
    return value.toFixed(1);
  }

}
