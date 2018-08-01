import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CompaniesService } from '@app/companies/companies.service';
import { AuthenticationService } from '@app/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  displayDialog: boolean = false;
  companies: any;
  isLoading: boolean = false;
  credentials: any;
  companyForm: FormGroup;
  constructor(private companiesService: CompaniesService, private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
    this.isLoading = true;
    this.credentials = this.authenticationService.credentials;
    this.createForm();
  }
  ngOnInit() {
    this.companiesService.getCompanies(this.credentials['x-access-token'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: Object[]) => { this.companies = data; console.log(this.companies) });
  }
  showFullInfo(item: any) {
    console.log('item', item, 'controls', this.companyForm.controls);
    this.companyForm.patchValue(item);
    this.displayDialog = !this.displayDialog;
    console.log(this.companyForm);

  }
  private createForm() {
    this.companyForm = this.formBuilder.group({
      phone: ['', Validators.required],
      birthday: ['', Validators.required],
      // director: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      passport: ['', Validators.required],

      company_cars: this.formBuilder.array([{
        address: this.formBuilder.group({
          label: '',
          coordinates: this.formBuilder.array(['', ''])
        }),
        car_attributes: this.formBuilder.group({
          brand: this.formBuilder.group({
            name: '',
            value: ''
          }),
          model: this.formBuilder.group({
            name: '',
            value: ''
          }),
        }),
        passengers_count: '',
        registration_number: ''
      }
      ]),
      company_users: this.formBuilder.array([{
        address: this.formBuilder.group({
          label: '',
          coordinates: this.formBuilder.array(['', ''])
        }),
      }])
      // official_address:  this.formBuilder.group({}),
      // physical_address:  this.formBuilder.group({}),
    });
  }
}
