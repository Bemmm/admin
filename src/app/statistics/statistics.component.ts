import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { StatisticsService } from '@app/statistics/statistics.service';
import { AuthenticationService } from '@app/core';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  isLoading: boolean;
  credentials: any;
  statistics: Object[];
  constructor(private statisticsService: StatisticsService, private authenticationService: AuthenticationService) {
  }
  ngOnInit() {
    this.credentials = this.authenticationService.credentials;
    this.isLoading = true;
    this.statisticsService.getStatistics(this.credentials['x-access-token'])
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: any) => { this.statistics = data.data; });
  }
  getTitle(id: string) {
    switch (id) {
      case 'user':
        return 'Аккаунтів';
      case 'cars':
        return 'Евакуаторів';
      case 'orders':
        return 'Замовлень';
      case 'company':
        return 'Служб';
      case 'driver':
        return 'Водіїв';
      case 'customer':
        return 'Користувачів';
    }
  }
  getIcon(id: any) {
    switch (id) {
      case 'user':
        return 'users';
      case 'cars':
        return 'truck';
      case 'orders':
        return 'phone';
      case 'company':
        return 'building';
      case 'driver':
        return 'car';
      case 'customer':
        return 'user-circle';
    }
  }

}
