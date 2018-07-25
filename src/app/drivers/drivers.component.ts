import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: any;
  displayDialog: any = false;
  constructor() {
    this.drivers = [
      {
        address: {
          type: "",
          coordinates: [],
          label: "Вінниця"
        },
        official_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        physical_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        cars: [],
        company_users: [],
        company_cars: [],
        company_id: [],
        _id: "",
        ownership: "",
        passport: "",
        name: "test",
        email: "asdasd@asd.asd",
        birthday: "28.06.12",
        role: "driver",
        phone: "390989422971",
      },
      {
        address: {
          type: "",
          coordinates: [],
          label: " Сіті вінниця"
        },
        official_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        physical_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        cars: [],
        company_users: [],
        company_cars: [],
        company_id: [],
        _id: "",
        ownership: "",
        passport: "",
        name: "test",
        email: "asdasd@asd.asd",
        birthday: "28.06.12",
        role: "driver",
        phone: "390989422971",
      },
      {
        address: {
          type: "",
          coordinates: [],
          label: ""
        },
        official_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        physical_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        cars: [],
        company_users: [],
        company_cars: [],
        company_id: [],
        _id: "",
        ownership: "",
        passport: "",
        name: "test",
        email: "asdasd@asd.asd",
        birthday: "28.06.12",
        role: "driver",
        phone: "390989422971",
      },
      {
        address: {
          type: "",
          coordinates: [],
          label: ""
        },
        official_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        physical_address: {
          type: "",
          coordinates: [],
          label: ""
        },
        cars: [],
        company_users: [],
        company_cars: [],
        company_id: [],
        _id: "",
        ownership: "",
        passport: "",
        name: "test",
        email: "asdasd@asd.asd",
        birthday: "28.06.12",
        role: "driver",
        phone: "390989422971",
      }
    ]
  }

  ngOnInit() {
  }
  showFullInfo() {
  this.displayDialog = !this.displayDialog;
  }
}
