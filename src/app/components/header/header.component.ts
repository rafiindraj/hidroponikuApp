import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { SettingsService, User } from '@delon/theme';
// import { LayoutDefaultOptions } from '@delon/theme/layout-default';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // mobileMenuOpen = false
  // isSearchBoxOpen = false
  // isOpen = false
  // profileOpen = false
  // optOpen = false
  // appOpen = false
  // showMenu = false;
  // notifOpen = false;
  // // showSideMenu = false
  // constructor() { }

  // ngOnInit(): void {
  // }
  // toggleNotif(){
  //   this.notifOpen = !this.notifOpen
  // }
  
  // toggleNavbar(){
  //   this.showMenu = !this.showMenu;
  // }

  // toggleProfile(){
  //   this.profileOpen = !this.profileOpen
  // }
  // toggleOptions(){
  //   this.optOpen = !this.optOpen
  // }

  // toggleApp(){
  //   this.appOpen = !this.appOpen
  // }
  // toggle(){
  //   this.isOpen = !this.isOpen
  // }

  // togglefalse(){
  //   this.isOpen = false
  // }

  // mobileMenu(){
  //   this.mobileMenuOpen = false
  // }

  // closeSearchBox(){
  //   console.log(this.isSearchBoxOpen)
  //   this.isSearchBoxOpen = false
  // }

  // openSearchBox(){
  //   this.isSearchBoxOpen = true
  // }
  isList: number;
  isMenu: boolean = false;
  isSearch: boolean = false;
  constructor(private route : Router) {}
  ngOnInit(): void {
    // this. openModal(true)
  }
  showModal = false;
  cartPage(){
    this.route.navigateByUrl('/cart');
  }

}
