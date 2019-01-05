import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  kitchen: Room;
  livingRoom: Room;
  home: Room[] = [];
  constructor() { }
  initHomeArray(rooms: Room[]) {
    setTimeout(() => {
      rooms.find(r => r.Name === 'room00').UserName = 'Kuchnia';
      rooms.find(r => r.Name === 'room01').UserName = 'Sypialnia';
      rooms.find(r => r.Name === 'room02').UserName = 'Łazienka';
      rooms.find(r => r.Name === 'room03').UserName = 'Pokój gościnny';
      this.home = rooms;
    });
  }
}
