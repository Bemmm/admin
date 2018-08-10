import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DriversService } from '@app/drivers/drivers.service';
import { AuthenticationService } from '@app/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


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
  driverForm: FormGroup;
  constructor(private driversService: DriversService, private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
    this.isLoading = true;
    this.credentials = this.authenticationService.credentials;
    this.createForm();
  }
  private createForm() {
    this.driverForm = this.formBuilder.group({
      phone: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      passport: ['', Validators.required],
      address: this.formBuilder.group({
        label: '',
        type:'Point',
        coordinates: this.formBuilder.array(['', ''])
      }),
      // physical_address: this.formBuilder.group({
      //   label: '',
      //   type:'Point',
      //   coordinates: this.formBuilder.array(['', ''])
      // }),
      // official_address: this.formBuilder.group({
      //   label: '',
      //   type:'Point',
      //   coordinates: this.formBuilder.array(['', ''])
      // }),
    });
  }
  ngOnInit() {
    this.driversService.getDrivers(this.credentials['x-access-token'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: Object[]) => { this.drivers = data; console.log(this.drivers) });
  }
  showFullInfo(item: any) {
    this.driverForm.patchValue(item);
    this.displayDialog = !this.displayDialog;
  }
}
