import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  private baseURL= "/users";
  public loginUserFromRemote():Observable<any>{
    return this._http.get<User[]>(this.baseURL);
  }
  private baseURL1= "/user";
  public registerUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>(this.baseURL1,user);
  }
  private baseURL2="/vendors";
  getVendorRequestsList(): Observable<Vendor[]>{
    return this._http.get<Vendor[]>(this.baseURL2);
  }
  private baseURLUpdate= "/vendor";
  updateDeliveryDate(id: number,vendor: Vendor): Observable<Object> {
    return this._http.post(`${this.baseURLUpdate}/${id}`, vendor);
  }
}
