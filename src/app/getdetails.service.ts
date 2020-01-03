import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdetailsService {

  constructor(private httpClient:HttpClient) { }
  Details()
  {
   return this.httpClient.get(" http://localhost:3000/Student")
  }
}
