import { Component } from '@angular/core';
import { ArduinoService } from './service/arduino.service';
import { Room } from './model/room';
import { HomeService } from './service/home.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _arduinoService: ArduinoService,
    private _homeService: HomeService
  ) {
    const unit = localStorage.getItem('unit');
    if (unit === undefined || unit === '') {
      localStorage.setItem('unit', 'C');
    }
    this._arduinoService.getHomeStatus().subscribe((roomState: Room[]) => {
      this._homeService.initHomeArray(roomState);
    });
  }
}
