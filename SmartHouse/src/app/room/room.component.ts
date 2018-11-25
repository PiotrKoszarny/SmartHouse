import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../service/arduino.service';
import { Room } from '../model/room';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { ResponseLedStatus } from '../model/responseLedStatus';
import { IAppState } from '../redux/iAppState';
import { KITCHEN_CHANGE_LED } from '../redux/actions';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  // checked = false;
  @select('kitchen') kitchen$: Observable<Room>;
  kitchen: Room;
  iconThermometr = '../../assets/warm.svg';

  constructor(
    private _arduinoService: ArduinoService,
    private _ngRedux: NgRedux<IAppState>
  ) {
    this.kitchen$.subscribe(room => {
      this.kitchen = room;
      console.log(this.kitchen)

    });
  }

  ngOnInit() {

  }

  changed() {
    this._arduinoService.postSetLedStatus().subscribe((result: ResponseLedStatus) => {
      this.kitchen.LedStatus = result.LedStatus;
      this._ngRedux.dispatch({ type: KITCHEN_CHANGE_LED, kitchen: this.kitchen });
      this.kitchen$.subscribe(x => {
        console.log(x);
      });
    });

  }
}
