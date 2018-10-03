import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    zipcodes: Array<String>;

    constructor(private weatherService : WeatherService,
                private router : Router) {

    }

    showForecast(zipcode : string) {
        this.router.navigate(['/forecast', zipcode]);
    }
}
