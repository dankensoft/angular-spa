import { Component, OnInit } from '@angular/core';
//Servicio
import { HeroesService,Heroe } from '../../services/heroes.service';
//Router
import  { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
              private _router:Router
    ) { 
    
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( i:number ){
    this._router.navigate( ['/heroe',i] );
  }

}
