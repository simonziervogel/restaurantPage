import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


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
export class AboutComponent implements OnInit {
  weatherInfo: weather = {
    temperature: 20,
    location: "München",
    condition: "sunny"
  }

  constructor(private service:WeatherService){

  }

  ngOnInit(): void {
    this.service.getWeather().subscribe((data: any) => {
      this.weatherInfo = data;
    });
  }


}
