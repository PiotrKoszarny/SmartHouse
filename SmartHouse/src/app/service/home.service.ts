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
    this.home = rooms;
  }
  getRoomName(id: number) {
    return localStorage.getItem(`room0${id - 1}`) ? localStorage.getItem(`room0${id - 1}`) : `Pokój ${id}`;
  }
}
