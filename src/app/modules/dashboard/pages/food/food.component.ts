import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/dashboard';
import { DashboardStateService } from '../../services/dashboard-state.service';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  foods: Food[] = [];
  cartFoods: Food[] = [];
  cart$: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private dashboardStateService: DashboardStateService
  ) {}

  selectFood(food: Food) {
    this.dashboardStateService.dispatchAddCart(food);
  }

  removeFood(foodId: number) {
    this.dashboardStateService.dispatchRemoveCart(foodId);
  }

  isSelected(foodId: number) {
    return this.cartFoods.some(food => food.id === foodId);
  }

  ngOnInit() {
    // Get All Foods
    this.dashboardService.getAllFood().subscribe(response => (this.foods = response.foods));
    // Get selected food from cart
    this.dashboardStateService.disptachGetCart();
    // Get Selected food from Cart
    this.cart$ = this.dashboardStateService
      .selectorCartItems()
      .subscribe(foods => (this.cartFoods = foods));
  }

  ngOnDestroy() {
    this.cart$.unsubscribe();
  }
}
