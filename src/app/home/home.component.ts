import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
    // Check if the component has been visited before
    const hasVisited = localStorage.getItem('myComponentVisited');

    if (!hasVisited) {
      alert("Willkommen auf unserer Homepage!");
      localStorage.setItem('myComponentVisited', 'true');
    }
  }
  buttonClicked() {
    fetch('http://localhost:8080/button-clicked')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
