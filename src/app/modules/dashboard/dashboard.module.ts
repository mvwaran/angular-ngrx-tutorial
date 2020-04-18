import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FoodTileComponent } from './components/food-tile/food-tile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FoodComponent } from './pages/food/food.component';
import { reducer } from './store/reducers';
import { DashboardService } from './services/dashboard.service';
import { DashboardStateService } from './services/dashboard-state.service';
import { CartComponent } from './pages/cart/cart.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects';

@NgModule({
  declarations: [FoodComponent, FoodTileComponent, CartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [DashboardService, DashboardStateService],
})
export class DashboardModule {}
