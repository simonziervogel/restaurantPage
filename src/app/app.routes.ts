import { Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {MenuComponent} from "./menu/menu.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HomePage',
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Menu'
  }

];
