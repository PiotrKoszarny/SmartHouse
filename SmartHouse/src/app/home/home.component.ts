import { Component, OnInit } from '@angular/core';
import { ResponseLedStatus } from '../model/responseLedStatus';
import { ArduinoService } from '../service/arduino.service';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  iconThermometr = '../../assets/warm.svg';
  constructor(
    private _arduinoService: ArduinoService,
    private _homeService: HomeService
  ) {
  }

  ngOnInit() {
  }
  changeLed(roomName: string) {
    if (roomName === 'Łazienka') {
      roomName = 'Lazienka';
    }
    this._arduinoService.postSetLedStatus(roomName + 'Led').subscribe((result: ResponseLedStatus) => {
      if (roomName === 'Lazienka') {
        roomName = 'Łazienka';
      }
      this._homeService.home.find(k => k.Name === roomName).LedStatus = result.LedStatus;
    });
  }
}
