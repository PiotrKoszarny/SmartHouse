import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../model/room';
import { ResponseLedStatus } from '../model/responseLedStatus';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {
  arduinoUrl = 'http://192.168.137.212';
  constructor(
    private _http: HttpClient
  ) {
  }
  getHomeStatus() {
    return this._http.get<Room[]>(this.arduinoUrl + '/GetAllRoomStatus');
  }

  postSetLedStatus(room: string) {
    return this._http.get<ResponseLedStatus>(this.arduinoUrl + '/' + room, {});
  }
}
