import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName: 'Eddy',
      lastName: 'Jo',
      age: 33,
      address: {
        street: '77 Silver St',
        city: 'Brampton',
        state: 'ON'
      }
    }
  }

}

