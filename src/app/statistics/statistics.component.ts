import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { StatisticsService } from '@app/statistics/statistics.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  isLoading: boolean;
  statistics : Object[];
  constructor(private statisticsService: StatisticsService) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.statisticsService.getStatistics()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((data: Object[]) => { this.statistics = data; });
  }
  getTitle(id: string) {
    switch (id) {
      case 'users':
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
      case 'users':
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
