import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardStateService } from '../../services/dashboard-state.service';
import { Food } from '../../models/dashboard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cart$: Subscription;
  foods: Food[] = [];

  constructor(private dashboardStateService: DashboardStateService) {}

  ngOnInit() {
    this.cart$ = this.dashboardStateService
      .selectorCartItems()
      .subscribe(foods => (this.foods = foods));
  }

  ngOnDestroy() {
    this.cart$.unsubscribe();
  }
}
