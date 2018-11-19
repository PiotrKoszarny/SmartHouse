import { Component } from '@angular/core';
import { ArduinoService } from './service/arduino.service';
import { IAppState } from './redux/iAppState';
import { NgRedux } from '@angular-redux/store';
import { INIT_ROOM_COLLECTION } from './redux/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'SmartHouse';

  constructor(
    private _arduinoService: ArduinoService,
    private _ngRedux: NgRedux<IAppState>,
  ) {
    _arduinoService.getHomeStatus().subscribe(roomState => {
      _ngRedux.dispatch({ type: INIT_ROOM_COLLECTION, allRoom: roomState });
    });
  }
}