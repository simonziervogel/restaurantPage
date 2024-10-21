import {Component, OnInit} from '@angular/core';

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WeatherService} from "../services/weather.service";
import {DatePipe} from "@angular/common";


interface weather{
  temperature: number;
  location: string;
  condition: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    DatePipe
  ],
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
      this.weatherInfo.current_weather = data.current_weather;
      console.log("das ist timeblubblub" + this.weatherInfo.current_weather.time)
    });
  }

  weatherTranslator(weathercode: number): string {
    if(0<= weathercode && weathercode <=3){
      return "Klares, gutes Wetter"
    }
    else if([45,48,51,53,55,56,57,61,66,80,85,71].includes(weathercode)){
      return "Leichter Regen oder Nebel"
    }
    else if([63,65,67,73,75,77,81,82,86,95,96,99].includes(weathercode)){
      return "Starker Regen oder Gewitter";
    }
    else{
      return "Unbekannter Wettercode"
    }

  }

  timeTranslator(isoString: string): string {
    isoString += ':00Z';
    let date = new Date(isoString);

    // check if date is valid
    console.log(date + "date is invalid blablalba");

    let hours = (date.getUTCHours() + 2) %24;
    let minutes = date.getUTCMinutes();

    let time = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return time;
  }
}
