import { Component, OnInit } from '@angular/core';
import { ArduinoService } from '../service/arduino.service';
import { HomeService } from '../service/home.service';
import { Room } from '../model/room';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private _arduinoService: ArduinoService,
    private _homeService: HomeService,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  refreshHomeList() {
    this._arduinoService.getHomeStatus().subscribe((roomState: Room[]) => {
      this._homeService.initHomeArray(roomState);
      this._toastr.success('', 'Dane zostały odświeżone');
    });
  }
}
