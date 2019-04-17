import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss']
})
export class CheckPage implements OnInit {
  data = [
    {
      name: 'Bulbasaur',
      selected: false,
      color: 'success'
    },
    {
      name: 'Charmander',
      selected: false,
      color: 'danger'
    },
    {
      name: 'Squirtle',
      selected: false,
      color: 'primary'
    },
    {
      name: 'Pikachu',
      selected: true,
      color: 'warning'
    }
  ];

  constructor() {}

  onClick(check) {
    console.log(check);
  }

  ngOnInit() {}
}
