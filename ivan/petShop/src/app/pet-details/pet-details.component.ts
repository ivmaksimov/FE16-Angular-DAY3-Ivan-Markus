import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { IPets } from '../IPets';
import { pets } from '../pets';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet: IPets = {} as IPets;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
    window.alert('This pet was added to the cart!');
    this.cartService.addToCart(this.pet);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['petId'];
      this.pet = pets[this.id];
    })
  }

}
