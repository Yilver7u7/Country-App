import { Component } from '@angular/core';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  searchByCapital( search: string ):void{
    console.log( 'Desde ByCapitalPage')
    console.log( {search})
  }

}
