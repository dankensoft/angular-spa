import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
      //console.log(this.heroes);
    })
  }

  verHeroe( i:number ){
    this._router.navigate( ['/heroe',i] );
  }

}
