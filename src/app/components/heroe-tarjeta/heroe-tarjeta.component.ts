import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor( private _router:Router) {
    //Inicializamos el EventEmitter
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    this.heroeSeleccionado.emit( this.index );
  }

  // verHeroe(){
  //   console.log(this.index);
  //   this._router.navigate( ['/heroe',this.index] );
  // }

}
