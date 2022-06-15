import { Component, OnInit } from '@angular/core';
import { pets } from '../pets';
import { IPets } from '../IPets';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: IPets[] = pets;

  constructor() { }

  ngOnInit(): void {
  }

}
