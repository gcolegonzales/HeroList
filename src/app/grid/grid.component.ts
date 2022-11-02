import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  heroes: any;

  constructor(private heroesService: HeroesService, private http: HttpClient) {
    this.heroesService.getHeroes();
  }

  ngOnInit(): void {
    this.http.get('https://tppublic.blob.core.windows.net/test-data/super-heroes.json')
      .subscribe((response) => this.heroes = response);
  }
}
