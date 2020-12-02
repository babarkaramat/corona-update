import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url = "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure="
  url1 = 'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesByPublishDate&format=json'
  getCases(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesByPublishDate&format=json'
    );
  }
  getNewCasesByPublishedDate(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesByPublishDate&format=json'
    );
  }

  newCasesBySpecimenDateRollingRate(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesBySpecimenDateRollingRate&format=json');
  }

  getDeath(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newDeaths28DaysByPublishDate&format=json'
    );
  }

  newDeaths28DaysByDeathDateRollingRate(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newDeaths28DaysByDeathDateRollingRate&format=json'
    );
  }

  getAdmit(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newAdmissions&format=json'
    );
  }

  newAdmissionsRollingRate(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newAdmissionsRollingRate&format=json'
    )
  }

  getTest(): Observable<any> {
    return this.http.get(
      'https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newVirusTests&format=json'
    );
  }

}

