import { Component } from '@angular/core';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    RouterOutlet,
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurantPage';
}
