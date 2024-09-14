import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesServices: CountriesService){}

  ngOnInit(): void {
    this.initialValue = this.countriesServices.cacheStore.byCountries.search;
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
  }

  searchBoxByCountry( search: string): void{
    this.isLoading = true;
    this.countriesServices.searchCountry(search)
    .subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
