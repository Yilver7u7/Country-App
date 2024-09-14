import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/Region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectionRegion?: Region;
  public isLoading: boolean = false;

  constructor( private countryServices:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countryServices.cacheStore.byRegion.countries;
    this.selectionRegion = this.countryServices.cacheStore.byRegion.region;
  }


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
