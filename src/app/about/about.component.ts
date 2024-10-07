import {Component, OnInit} from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WeatherService} from "../services/weather.service";


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
  weatherInfo: any = {
    current_weather: {
      temperature: 0,
      time: "",
      location: "",
      weathercode: 0
    }
  }

  constructor(private service:WeatherService)
    {

  }

  ngOnInit(): void {
    this.service.getWeather().subscribe((data: any) => {
      console.log(data);
      this.weatherInfo.current_weather = data.current_weather;
      console.log(this.weatherInfo.current_weather);
    });
  }


}
