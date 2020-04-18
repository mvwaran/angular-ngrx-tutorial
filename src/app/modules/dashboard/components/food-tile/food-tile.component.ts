import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../../models/dashboard';

@Component({
  selector: 'app-food-tile',
  templateUrl: './food-tile.component.html',
  styleUrls: ['./food-tile.component.scss'],
})
export class FoodTileComponent implements OnInit {
  @Input() isSelected = false;
  @Input() food: Food;
  @Output() selectFood = new EventEmitter<Food>();
  @Output() removeFood = new EventEmitter<number>();

  constructor() {}

  selectItem() {
    this.selectFood.emit(this.food);
  }

  removeItem() {
    this.removeFood.emit(this.food.id);
  }

  ngOnInit() {}
}
