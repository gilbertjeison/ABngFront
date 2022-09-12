import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  public postNumberConversionResult(body:any) {
    return this.http.post(
      `http://localhost:7147/api/Function1`,body,{
        responseType: 'text' }
    );
  }
}
