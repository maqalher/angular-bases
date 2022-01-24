import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {



  ngOnInit(): void {
  }

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // agregarNuevoPersonaje(arguemnto:Personaje) {
  //   // console.log(arguemnto);
  //   this.personajes.push(arguemnto);
  // }

    // get personajes():Personaje[] {
    //   return this.dbzService.personajes;
    // }

  constructor( private dbzService: DbzService) {
    // this.personajes = this.dbzService.personajes;
  }

}
