import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { DeathModel } from '../../models/death.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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

  constructor(private service: DataService, private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {

    this.service.getDeath().pipe(
      map(x => { return x.data; }))
      .subscribe((res: any) => {
        this.death = res;

      })
  }
  getdate(i) {
    return this.death[i] && this.death[i].date || '';
  }
  getvalue(i, j) {
    let value = 0
    for (let index = i; index <= j; index++) {
      value += this.death[index] && +this.death[index].newCases || 0;
    }
    return value;
  }
  AddDeathData() {
    var dea = []
    this.death.forEach(element => {
      let deaObj = {
        date: element.date,
        newCases: element.newCases
      }
      dea.push(deaObj)
    });
    this.store.dispatch({
      type: 'death',
      payload: <DeathModel>{
        death: dea
      }
    });
    this.router.navigate(['death']);
  }
  getPercentage() {
    var value = ((this.getvalue(7, 13) - this.getvalue(0, 6)) / this.getvalue(7, 13)) * 100
    return value.toFixed(1);
  }

}
