import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private countriesServices: CountriesService){}

  searchBoxByCountry( search: string): void{
    this.countriesServices.searchCountry(search)
    .subscribe(countries => {
      this.countries = countries;
    })
  }

}
