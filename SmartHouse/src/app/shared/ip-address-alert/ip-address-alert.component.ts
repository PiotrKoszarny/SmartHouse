import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ip-address-alert',
  templateUrl: './ip-address-alert.component.html',
  styleUrls: ['./ip-address-alert.component.scss']
})
export class IpAddressAlertComponent implements OnInit {
  ipAddress = '';
  constructor(
    public dialogRef: MatDialogRef<IpAddressAlertComponent>,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
  }
  saveIPAddress() {
    localStorage.setItem('ipAddress', this.ipAddress);
    this._toastr.success('', 'Poprawnie zapisano adres IP centrali');
    setTimeout(() => {
      this.dialogRef.close();
    }, 500);
  }

}
