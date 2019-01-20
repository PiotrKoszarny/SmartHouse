import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ip-address-alert',
  templateUrl: './ip-address-alert.component.html',
  styleUrls: ['./ip-address-alert.component.scss']
})
export class IpAddressAlertComponent implements OnInit {
  ipAddress = '';
  constructor(
    public dialogRef: MatDialogRef<IpAddressAlertComponent>
  ) { }

  ngOnInit() {
  }
  saveIPAddress() {
    localStorage.setItem('ipAddress', this.ipAddress);
    setTimeout(() => {
      this.dialogRef.close();
    }, 500);
  }

}
