import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheSearch } from '../interfaces/cache-search';
import { Region } from '../interfaces/Region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheSearch = {
    byCapital:   { search: '', countries: [] },
    byCountries: { search: '', countries: [] },
    byRegion:    { region: '', countries: [] }
  };

  // Nos permite almacenar la informacion en el localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem( 'cahceStore', JSON.stringify( this.cacheStore))
  }

  // Validacion para saber si hay memorai en el localStorage
  private loadFromLocalStorage(): void {
    if (!localStorage.getItem( 'cahceStore' ))return

    this.cacheStore = JSON.parse(localStorage.getItem( 'cahceStore')!)
  }


  private getCountriesRequest( url: string ): Observable<Country[]> {
    return this.http.get<Country[]>( url )
    .pipe(
      tap( countries => console.log( 'Paso por Pipe', countries)),
      catchError( () => of([])),
      delay(2000)
    );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  searchCapital( queryString:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${queryString}`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStore.byCapital = {search: queryString, countries}),
      tap( () => this.saveToLocalStorage())
    )

    // return this.http.get<Country[]>( url )
    // .pipe(
    //   tap( countries => console.log( 'Paso por Capital', countries)),
    //   catchError( () => of([]))
    // );
  }

  searchCountry( queryString:string ):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${queryString}`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStore.byCountries = { search: queryString, countries}),
      tap( () => this.saveToLocalStorage())
    )

    // return this.http.get<Country[]>( url )
    // .pipe(
      //   tap( countries => console.log( 'Paso por Country', countries)),
      //   catchError( () => of([]))
      // );
    }

    searchRegion( queryString: Region):Observable<Country[]>{
      const url = `${this.apiUrl}/region/${queryString}`;
      return this.getCountriesRequest( url )
      .pipe(
      tap( countries => this.cacheStore.byRegion = { region: queryString, countries}),
      tap( () => this.saveToLocalStorage())
    )

  //   return this.http.get<Country[]>( url )
  //   .pipe(
  //     tap( countries => console.log( 'Paso por Region', countries)),
  //     catchError( () => of([]))
  //   );
  }


}


