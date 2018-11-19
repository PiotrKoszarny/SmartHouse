import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../service/arduino.service';
import { Room } from '../model/room';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  // checked = false;
  @select('allRoom') allRoom;
  corridor: Room[];
  corridorAsync: Observable<Room[]>;
  LedStatus: Observable<number>;

  constructor(
    private _arduinoService: ArduinoService,
  ) { }

  ngOnInit() {
    this.corridorAsync = this._arduinoService.getHomeStatus();
    this.corridorAsync.subscribe((room: Room[]) => {
      this.corridor = room;
      // this.LedStatus = room[0].LedStatus;//.asObservable();
    });
    // this.LedStatus
  }

  changed() {
    // console.log(this.corridor[0].LedStatus);
    // console.log(this.corridor[0]);
    // console.log(this.corridor);
    this.allRoom.subscribe(x => {
      console.log(x);
    })

  }
}
