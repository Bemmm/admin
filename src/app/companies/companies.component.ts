import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CompaniesService } from '@app/companies/companies.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  displayDialog: boolean = false;
  companies: any;
  isLoading: boolean = false;
  constructor(private companiesService: CompaniesService) {
    this.isLoading = true;
    this.companiesService.getCompanies()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: Object[]) => { this.companies = data[0]; console.log(this.companies) });
  }
  ngOnInit() {
  }
  showFullInfo() {
    this.displayDialog = !this.displayDialog;
    }
}
