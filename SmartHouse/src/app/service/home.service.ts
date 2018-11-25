import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  kitchen: Room;
  livingRoom: Room;
  home: Room[];
  constructor() { }
  initHomeArray(rooms: Room[]) {
    setTimeout(() => {
      this.home = rooms;
      // .asObservable();
      // rooms.forEach(element => {
      //   this.home.push(element);
      // });
    });
  }
}
