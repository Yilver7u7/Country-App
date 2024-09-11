import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  searchCapital( queryString:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${queryString}`;
    return this.http.get<Country[]>( url )
    .pipe(
      tap( countries => console.log( 'Paso por Capital', countries)),
      catchError( () => of([]))
    );
  }

  searchCountry( queryString:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${queryString}`;

    return this.http.get<Country[]>( url )
    .pipe(
      tap( countries => console.log( 'Paso por Country', countries)),
      catchError( () => of([]))
    );
  }

  searchRegion( queryString: string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${queryString}`;
    return this.http.get<Country[]>( url )
    .pipe(
      tap( countries => console.log( 'Paso por Region', countries)),
      catchError( () => of([]))
    );
  }


}


