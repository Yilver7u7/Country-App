import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.css'
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];




}
