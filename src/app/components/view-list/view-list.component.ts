import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  accounts = [
    {
      name: 'Kundan S Patel',
      amount: 3000,
      paid: 2000,
      b1: 1000,
      b2: 1000,
      b3: 1000,
      isB1Completed: true,
      isB2Completed: true,
      isB3Completed: false,
    },
    {
      name: 'Badal Das',
      amount: 3000,
      paid: 0,
      b1: 1000,
      b2: 1000,
      b3: 1000,
      isB1Completed: false,
      isB2Completed: false,
      isB3Completed: false,
    },
    {
      name: 'Rehan Raza',
      amount: 3000,
      paid: 1000,
      b1: 1000,
      b2: 1000,
      b3: 1000,
      isB1Completed: true,
      isB2Completed: false,
      isB3Completed: false,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
