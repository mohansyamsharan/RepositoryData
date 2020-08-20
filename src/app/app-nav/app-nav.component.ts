import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  navTitle:string
  constructor() { }

  ngOnInit() {
    this.navTitle = "Repositories on Github." 
  }

}
