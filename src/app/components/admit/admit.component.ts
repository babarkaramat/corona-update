import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { AdmitModel } from 'src/app/models/admit.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admit',
  templateUrl: './admit.component.html',
  styleUrls: ['./admit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdmitComponent implements OnInit {
  admit: any = [];
  @ViewChild('tooltip')
  public control: TooltipComponent;

  constructor(private service: DataService, private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.service.getAdmit().pipe(
      map(x => { return x.data; }))
      .subscribe((res: any) => {
        this.admit = res;

      })
  }
  getdate(i) {
    let date = ""
    this.admit.forEach((element, index) => {
      if (index == i) {
        date = element.date;
      }
    });
    return date;
  }
  getvalue(i, j) {
    let value = 0
    this.admit.forEach((element, index) => {
      if (index >= i && index <= j) {
        value += +element.newAdmit;
      }
    });
    return value;
  }
  getPercentage() {
    var value = ((this.getvalue(7, 13) - this.getvalue(0, 6)) / this.getvalue(7, 13)) * 100
    return value.toFixed(1);
  }
  AddAdmitData() {
    var adm = []
    this.admit.forEach(element => {
      let admObj = {
        date: element.date,
        newAdmit: element.newAdmit
      }
      adm.push(admObj)
    });
    this.store.dispatch({
      type: 'admit',
      payload: <AdmitModel>{
        admit: adm
      }
    });
    this.router.navigate(['details/' + 'admit']);
  }

}
