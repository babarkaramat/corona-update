import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';
import { AdmitModel } from 'src/app/models/admit.model';
import { forkJoin } from 'rxjs';

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
  RollingRate: any = [];

  constructor(private service: DataService, private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit() {

    forkJoin(
      this.service.getAdmit().pipe(map(x => { return x.body; })),
      this.service.newAdmissionsRollingRate().pipe(map(x => { return x.body; }))
    ).subscribe((res: any) => {
      this.admit = res[0].filter(x => x.newAdmissions != null);
      this.RollingRate = res[1].filter(x => x.newAdmissionsRollingRate > 0);
    })


    // this.service.getAdmit().pipe(
    //   map(x => { return x.body; }))
    //   .subscribe((res: any) => {
    //     this.admit = res.filter(x => x.newAdmissions != null);
    //   })
    // this.service.newAdmissionsRollingRate().pipe(
    //   map(x => { return x.body; }))
    //   .subscribe((res: any) => {
    //     this.RollingRate = res.filter(x => x.newAdmissionsRollingRate > 0);
      // })


  }
  getdate(i) {
    return this.admit[i] && this.admit[i].date || '';
  }
  getvalue(i, j) {
    let value = 0
    for (let index = i; index <= j; index++) {
      value += this.admit[index] && +this.admit[index].newAdmissions || 0;
    }
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
        newAdmissions: element.newAdmissions
      }
      adm.push(admObj)
    });
    this.store.dispatch({
      type: 'admit',
      payload: <AdmitModel>{
        admit: adm
      }
    });
    this.router.navigate(['dashboard/' + 'admit']);
  }

}
