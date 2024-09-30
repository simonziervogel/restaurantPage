import { Component } from '@angular/core';

interface weather{
  temperature: number;
  location: string;
  condition: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  weatherArray: weather[]=[

  ]
}
