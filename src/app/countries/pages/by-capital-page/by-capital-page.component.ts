import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.search;
  }


  searchByCapital( search: string ):void{
    // El loading es para hacer la carga de mi loader
    this.isLoading = true;
    // Se hace la consulta htpp
    this.countriesService.searchCapital( search )
    .subscribe( countries => {
      this.countries = countries;
      //Desaparece mi loader
      this.isLoading = false;
    })
  }

}
