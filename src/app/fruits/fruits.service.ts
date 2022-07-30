import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruits } from './fruits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http:HttpClient) { }

  get (): Observable<Fruits[]> {
    return this.http.get<Fruits[]>("http://localhost:3000/fruits")

  }
}
