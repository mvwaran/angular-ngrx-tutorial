import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllFoodResponse, GetCartResponse } from '../models/dashboard';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAllFood(): Observable<GetAllFoodResponse> {
    return this.http.get<GetAllFoodResponse>('/assets/mocks/food.json');
  }

  getCart(): Observable<GetCartResponse> {
    return this.http.get<GetCartResponse>('/assets/mocks/cart.json');
  }
}
