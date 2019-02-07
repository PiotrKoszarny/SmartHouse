import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../model/room';
import { ResponseLedStatus } from '../model/responseLedStatus';
import { MatDialog } from '@angular/material';
import { IpAddressAlertComponent } from '../shared/ip-address-alert/ip-address-alert.component';
import { of, observable, Observable } from 'rxjs';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {
  arduinoUrl = '';
  constructor(
    private _http: HttpClient,
    private _dialog: MatDialog,
    private _homeService: HomeService
  ) {
    const ipAddress = localStorage.getItem('ipAddress');
    if (ipAddress === undefined || ipAddress === null || ipAddress.length === 0) {
      this.openDialog();
    } else {
      this.arduinoUrl = `http://${ipAddress}`;
    }
  }

  openDialog() {
    const dialogRef = this._dialog.open(IpAddressAlertComponent);
    dialogRef.afterClosed().subscribe(result => {
      const ipAddress = localStorage.getItem('ipAddress');
      this.arduinoUrl = `http://${ipAddress}`;
      this.getHomeStatus().subscribe((roomState: Room[]) => {
        this._homeService.initHomeArray(roomState);
      });
    });
  }

  getHomeStatus() {
    if (!this.isArduinoUrlCorrect()) {
      return new Observable();
    }
    return this._http.get<Room[]>(this.arduinoUrl + '/GetAllRoomStatus');
  }

  postSetLedStatus(room: string) {
    if (!this.isArduinoUrlCorrect()) {
      return new Observable();
    }
    return this._http.get<ResponseLedStatus>(this.arduinoUrl + '/' + room, {});
  }

  isArduinoUrlCorrect() {
    if (this.arduinoUrl === undefined || this.arduinoUrl === null || this.arduinoUrl.length === 0) {
      return false;
    }
    return true;
  }
}
