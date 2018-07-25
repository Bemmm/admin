import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statistics: any;
  constructor() {
    this.statistics = [
      {
        "_id": "users",
        "count": 11
      },
      {
        "_id": "company",
        "count": 1,
      },
      {
        "_id": "customer",
        "count": 6,
      },
      {
        "_id": "driver",
        "count": 4,
      },
      {
        "_id": "cars",
        "count": 20
      },
      {
        "_id": "orders",
        "count": 20,
      }
    ]
  }
  ngOnInit() {
  }
  getTitle(id: string) {
    switch (id) {
      case 'users':
        return 'Всього аккаунтів';
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
}
