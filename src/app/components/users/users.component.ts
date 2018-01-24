import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '77 Silver St',
          city: 'Brampton',
          state: 'ON'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 31,
        address: {
          street: '20 Nick St',
          city: 'Toronto',
          state: 'ON'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00')
      },
      {
        firstName: 'Carrie',
        lastName: 'Rachon',
        age: 22,
        address: {
          street: '58 Down St',
          city: 'Edmonton',
          state: 'AB'
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00')
      }
    ];

      this.loaded = true; 
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
