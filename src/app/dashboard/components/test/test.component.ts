import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Router } from '@angular/router';
import { TestModel } from 'src/app/models/test.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  test: any = [];
  @ViewChild('tooltip')
  public control: TooltipComponent;



  constructor(private service: DataService, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.service.getTest().pipe(map(x => { return x.body; }))
      .subscribe((res: any) => {
        this.test = res.filter(x => x.newVirusTests != null);
      })

  }
  getdate(i) {
    return this.test[i] && this.test[i].date || '';
  }
  getvalue(i, j) {
    let value = 0
    for (let index = i; index <= j; index++) {
      value += this.test[index] && +this.test[index].newVirusTests || 0;
    }
    return value;
  }
  getPercentage() {
    var value = ((this.getvalue(7, 13) - this.getvalue(0, 6)) / this.getvalue(7, 13)) * 100
    return value.toFixed(1);
  }
  AddTestData() {
    var tes = []
    this.test.forEach(element => {
      let tesObj = {
        date: element.date,
        newVirusTests: element.newVirusTests
      }
      tes.push(tesObj)
    });
    this.store.dispatch({
      type: 'death',
      payload: <TestModel>{
        test: tes
      }
    });
    this.router.navigate(['dashboard/' + 'test']);
  }
}

