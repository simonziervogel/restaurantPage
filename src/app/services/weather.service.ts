import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {

  }
  getWeather():Observable<any>{
    //TODO funktion parameterisieren
    return this.http.get("https://api.open-meteo.com/v1/forecast?latitude=48.11&longitude=11.60&current_weather=true");
}
}
