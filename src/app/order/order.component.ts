import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';
import { AuthenticationService } from '@app/core';
import { OrderService } from '@app/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  credentials: any;
  isLoading: any;
  orders: any;
  version: string = environment.version;
  displayDialog: Boolean = false;
  constructor(private authenticationService: AuthenticationService, private orderService: OrderService) { }

  ngOnInit() {
    this.credentials = this.authenticationService.credentials;
    this.isLoading = true;
    this.orderService.getOrders(this.credentials['x-access-token'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: any) => { this.orders = data; });
  }
  showFullInfo() {
    this.displayDialog = !this.displayDialog;
  }
}
