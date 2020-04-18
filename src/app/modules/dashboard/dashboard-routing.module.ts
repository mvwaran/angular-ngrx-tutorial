import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './pages/food/food.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: 'food', component: FoodComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'food', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
