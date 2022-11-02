import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  heroes: any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get('https://tppublic.blob.core.windows.net/test-data/super-heroes.json')
      .subscribe((response) => this.heroes = response);
  }
}
