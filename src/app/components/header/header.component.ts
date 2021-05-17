import { Component, OnInit } from '@angular/core';
// import { SettingsService, User } from '@delon/theme';
// import { LayoutDefaultOptions } from '@delon/theme/layout-default';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = false
  // showSideMenu = false
  constructor() { }

  ngOnInit(): void {
  }
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  mobileMenu(){
    this.mobileMenuOpen = false
  }


}
