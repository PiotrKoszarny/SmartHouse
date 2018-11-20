import { Component } from '@angular/core';
import { ArduinoService } from './service/arduino.service';
import { IAppState } from './redux/iAppState';
import { NgRedux, select } from '@angular-redux/store';
import { KITCHEN_CHANGE_LED } from './redux/actions';
import { Room } from './model/room';
import { createEmptyStateSnapshot } from '@angular/router/src/router_state';

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
    _arduinoService.getHomeStatus().subscribe((roomState: Room[]) => {
      _ngRedux.dispatch({ type: KITCHEN_CHANGE_LED, kitchen: roomState.find(k => k.Id === 'kitchen') });
    });
  }
}
