import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ipAddress = '';

  units: string[] = [
    'Stopnie Kelwina',
    'Stopnie Celsjusza',
    'Stopnie Farentheita'
  ];

  home: Room[] = [{
    RoomName: localStorage.getItem('room00')
  },
  {
    RoomName: localStorage.getItem('room01')
  },
  {
    RoomName: localStorage.getItem('room02')
  },
  {
    RoomName: localStorage.getItem('room03')
  }
  ];
  constructor(
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this.ipAddress = localStorage.getItem('ipAddress');
  }
  saveIPAddress() {
    localStorage.setItem('ipAddress', this.ipAddress);
  }
  saveRoomName() {
    let index = 0;
    this.home.forEach(element => {
      localStorage.setItem(`room0${index}`, element.RoomName);
      index++;
    });
    this._toastr.success('', 'Dane zostały zapisane');
  }

  changeUnit(unit: any) {
    if (unit.value === 'Stopnie Kelwina') {
      localStorage.setItem('unit', 'K');
    } else if (unit.value === 'Stopnie Celsjusza') {
      localStorage.setItem('unit', 'C');
    } else if (unit.value === 'Stopnie Farentheita') {
      localStorage.setItem('unit', 'F');
    }
  }
}
