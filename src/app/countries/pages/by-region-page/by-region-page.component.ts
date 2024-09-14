import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';


type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectionRegion?: Region;
  public isLoading: boolean = false;

  constructor( private countryServices:CountriesService){}


  searchBoxByRegion( search: Region): void{
    this.isLoading = true;
    this.selectionRegion = search;

    this.countryServices.searchRegion( search )
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }


}
