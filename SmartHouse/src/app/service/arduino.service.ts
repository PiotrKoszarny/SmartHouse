import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {
  arduinoUrl = 'http://192.168.137.173/corridorled';
  constructor(
    private _http: HttpClient
  ) {
    // this.baseUrl = '/api/';
  }
  getHomeStatus() {
    return this._http.get<Room[]>( this.arduinoUrl);
  }
}
