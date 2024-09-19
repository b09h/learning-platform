import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    
  }
  loggedIn: boolean = false;

  login() {
    // Implement login logic here
    this.loggedIn = true;
  }

  logout() {
    // Implement logout logic here
    this.loggedIn = false;
  }
}
