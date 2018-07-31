import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DriversService } from '@app/drivers/drivers.service';
import { AuthenticationService } from '@app/core';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: any;
  isLoading: boolean;
  credentials: any;
  displayDialog: any = false;
  constructor(private driversService: DriversService, private authenticationService: AuthenticationService) {
    this.isLoading = true;
    this.credentials = this.authenticationService.credentials;
  }

  ngOnInit() {
    this.driversService.getDrivers(this.credentials['x-access-token'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: Object[]) => { this.drivers = data; console.log(this.drivers) });
  }
  showFullInfo() {
    this.displayDialog = !this.displayDialog;
  }
}
