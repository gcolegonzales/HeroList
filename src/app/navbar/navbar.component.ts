import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {linkId: 1, linkName: 'List View', linkUrl: 'list'},
    {linkId: 2, linkName: 'Grid View', linkUrl: 'grid'}
  ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
