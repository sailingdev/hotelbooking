import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { Location ,DOCUMENT} from "@angular/common";
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  route: string;
  public headerclass = '';
  public topbar = '';
  public topbar_header = '';
  public social = '';
  public sign = '';
  public signUpDropdownInvoker = '';
  public euro1  = '';
  public euro  = '';
  public logoandNav  = '';
  public logo  = '';
  public responsiveToggle  = '';
  public navigatioin  = '';
  public tour  = '';
  public starter1  = '';
  public starter2  = '';
  public Shopping_Cart1  = '';
  public Shopping_Cart2  = '';
  public localExpert = '';
  constructor(    
    location: Location,
    private ActivateRoute: ActivatedRoute,
    private router: Router) {
      router.events.subscribe(val => {  
        if (val instanceof NavigationEnd) {
          this.appendRouteMetaData();
        }
        if (location.path() != "") {
          let urls = location.path().split("/");
          this.route = urls[1];
        }else{
          this.route = '';
        }

       
      });
    }

  ngOnInit(): void {
    
  }
  private appendRouteMetaData() {
    if(this.route == '' || this.route == 'home'){
      this.headerclass = 'u-header u-header--abs-top u-header--white-nav-links-xl u-header--bg-transparent u-header--show-hide border-bottom border-xl-bottom-0 border-color-white';
      this.topbar = 'border-color-white';
      this.topbar_header = 'list-inline u-header__topbar-nav-divider mb-0';
      this.social = 'btn btn-sm btn-icon btn-pill btn-soft-white btn-bg-transparent transition-3d-hover';
      this.sign = 'u-header__topbar-divider';
      this.signUpDropdownInvoker = 'text-white py-3';   
      
      this.euro1 = "u-header__topbar-divider";  
      this.euro  = "py-3";
      this.logoandNav  = "py-1 py-xl-0";
      this.logo  = "u-header__navbar-brand-text-white mr-0 mr-xl-5";
      this.responsiveToggle  = "u-hamburger--primary";
      this.navigatioin  = "mx-n3 mx-xl-0";
      this.tour  = "";
      this.starter1  = 'mb-md-0 mb-xl-3 min-width-xl-100 btn-wide ml-4 ml-xl-0';
      this.starter2  = 'min-width-xl-100 btn-wide ml-4 ml-xl-0';
      this.Shopping_Cart1  = 'd-none d-xl-block';
      this.Shopping_Cart2 = '';
      this.localExpert = 'btn-white';
    } else{
      this.headerclass = 'u-header u-header--dark-nav-links-xl u-header--show-hide-xl u-header--static-xl';
      this.topbar = 'border-color-8';
      this.topbar_header = 'list-inline list-inline-dark u-header__topbar-nav-divider--dark mb-0';
      this.social = 'btn btn-xs btn-icon btn-pill btn-soft-dark btn-bg-transparent transition-3d-hover';
      this.sign = 'u-header__topbar-divider--dark';
      this.signUpDropdownInvoker = 'text-dark';
      this.euro = "";  
      this.euro1 = "u-header__topbar-divider--dark";  
      this.logoandNav  = "py-xl-2 border-bottom-xl";
      this.logo  = "u-header__navbar-brand-text-dark-xl";
      this.responsiveToggle  = "u-hamburger--white";
      this.navigatioin  = "";
      this.tour  = 'u-header__mega-menu-position-right-fix-10';
      this.starter1  = 'w-100';
      this.starter2  = 'w-100';
      this.Shopping_Cart1  = '';
      this.Shopping_Cart2 = 'text-primary-max-lg';
      this.localExpert = 'btn-primary';
    }
  }
}
