import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Target } from './table-target/table-target.component'

@Injectable({
  providedIn: 'root'
})
export class RowService {
  @Output() rowEvent: EventEmitter<Target> = new EventEmitter

  constructor(private http: HttpClient) { }
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  
  public requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  public get_local_data() {
    // const url = "https://www3build.keck.hawaii.edu/api/ddoi/getDefs"
    const url = "https://vm-appserver.keck.hawaii.edu/api/ddoi/getDefs"
    return this.http.get(url, this.requestOptions)
  }
}
