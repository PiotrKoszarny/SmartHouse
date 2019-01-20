import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ipAddress = '';
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
  constructor() { }

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
  }
}
