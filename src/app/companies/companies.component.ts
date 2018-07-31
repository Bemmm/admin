import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CompaniesService } from '@app/companies/companies.service';
import { AuthenticationService } from '@app/core';


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
  constructor(private companiesService: CompaniesService, private authenticationService: AuthenticationService) {
    this.isLoading = true;
    this.credentials = this.authenticationService.credentials;

  }
  ngOnInit() {
    this.companiesService.getCompanies(this.credentials['x-access-token'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: Object[]) => { this.companies = data; console.log(this.companies) });
  }
  showFullInfo() {
    this.displayDialog = !this.displayDialog;
  }
}
