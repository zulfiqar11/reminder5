import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JsonFormData } from '../model/registerform.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getRegisterFormData(): Observable<JsonFormData> {
    return this.http.get<JsonFormData>('/assets/register-form.json');
  }
}
