import { Component, OnInit } from '@angular/core';
import f from '../../../data/flights';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  private readonly sortCol = 'CHLOC1T';
  flights = f;
  search = '';
  sortDirection = 1;

  constructor() {}

  bgColor(flight) {
    switch (flight['CHRMINE']) {
      case 'DEPARTED':
        return 'skyblue';
      case 'LANDED':
        return 'palegreen';
      case 'CANCELED':
        return 'pink';
      default:
        return 'white';
    }
  }

  onClickChloc1t() {
    this.flights.sort(
      ({ [this.sortCol]: a }, { [this.sortCol]: b }) =>
        (a < b ? -1 : +1) * this.sortDirection
    );
    this.sortDirection = -this.sortDirection;
  }

  onKeyUpSearch({ target: { value } }) {
    this.search = value;
  }

  ngOnInit(): void {}
}
