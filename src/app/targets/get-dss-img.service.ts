import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetDssImgService {

  constructor(private http: HttpClient) { }

  public get_dss_img(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, {responseType: 'blob'})
  }
}
