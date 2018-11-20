import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../model/room';
import { ResponseLedStatus } from '../model/responseLedStatus';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {
  arduinoUrl = 'http://192.168.137.63';
  constructor(
    private _http: HttpClient
  ) {
    // this.baseUrl = '/api/';
  }
  getHomeStatus() {
    return this._http.get<Room[]>(this.arduinoUrl + '/GetAllRoomStatus');
  }

  postSetLedStatus() {
    const x =  this._http.get<ResponseLedStatus>(this.arduinoUrl + '/corridorled', {});
    return x;
  }
}
