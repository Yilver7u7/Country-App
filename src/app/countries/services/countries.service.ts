import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  searchCapital( queryString:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${queryString}`;
    return this.http.get<Country[]>( url )
  }

}


