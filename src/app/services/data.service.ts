import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure="
  getCases(): Observable<any> {
    return this.http.get(this.url + `{"date":"date","newCases":"newCasesByPublishDate"}`);
  }
  getDeath(): Observable<any> {
    return this.http.get(this.url + `{"date":"date","newCases":"newDeathsByDeathDate"}`);
  }

  getAdmit(): Observable<any> {
    return this.http.get(this.url + `{"date":"date","newAdmit":"newAdmissions"}`);
  }
  getTest(): Observable<any> {
    return this.http.get(this.url + `{"date":"date","newTest":"newTestsByPublishDate"}`);
  }
  
}

