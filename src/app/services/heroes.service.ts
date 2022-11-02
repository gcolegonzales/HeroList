import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }
  getHeroes() {
    console.log('Hello World!');
  }
}
