import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DeathModel } from 'src/app/models/death.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeathComponent implements OnInit {
  death: any = [];
  @ViewChild('tooltip')
  public control: TooltipComponent;
  RollingRate: any = [];

  constructor(private service: DataService, private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    forkJoin(
      this.service.getDeath().pipe(map(x => { return x.body; })),
      this.service.newDeaths28DaysByDeathDateRollingRate().pipe(map(x => { return x.body; }))
    ).subscribe((res: any) => {
      this.death = res[0];
      this.RollingRate = res[1].filter(x => x.newDeaths28DaysByDeathDateRollingRate != null);
    })


    // this.service.getDeath().pipe(
    //   map(x => { return x.body; }))
    //   .subscribe((res: any) => {
    //     this.death = res;
    //   })

    // this.service.newDeaths28DaysByDeathDateRollingRate().pipe(
    //   map(x => { return x.body; }))
    //   .subscribe((res1: any) => {
    //     this.RollingRate = res1.filter(x => x.newDeaths28DaysByDeathDateRollingRate != null);
    //   })
  }
  getdate(i) {
    return this.death[i] && this.death[i].date || '';
  }
  getvalue(i, j) {
    let value = 0
    for (let index = i; index <= j; index++) {
      value += this.death[index] && +this.death[index].newDeaths28DaysByPublishDate || 0;
    }
    return value;
  }
  AddDeathData() {
    var dea = []
    this.death.forEach(element => {
      let deaObj = {
        date: element.date,
        newDeaths28DaysByPublishDate: element.newDeaths28DaysByPublishDate
      }
      dea.push(deaObj)
    });
    this.store.dispatch({
      type: 'death',
      payload: <DeathModel>{
        death: dea
      }
    });
    this.router.navigate(['dashboard/' + 'death']);
  }
  getPercentage() {
    var value = ((this.getvalue(7, 13) - this.getvalue(0, 6)) / this.getvalue(7, 13)) * 100
    return value.toFixed(1);
  }

}
