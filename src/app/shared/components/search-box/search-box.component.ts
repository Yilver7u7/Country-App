import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  // Nos permite una observacion en el momento en el que algo cambia
  private debouncer: Subject<string> = new Subject<string>();
  // Permite dejar de escuchar nuestro Debouncer permitiendonos ahorrar memoria
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';
  // Esto nos permite guardar en los input el valor de la busqueda
  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebouncer = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebouncer.emit(value)
      }
    )
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress( search: string ){
    this.debouncer.next(search);
  }

}
