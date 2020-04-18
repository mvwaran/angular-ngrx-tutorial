export interface Food {
  id: number;
  name: string;
  vegetarian: boolean;
}

export interface DashboardState {
  cart: Food[];
  getCartHttpError: Error;
  getCartHttpLoading: boolean;
}

export interface GetAllFoodResponse {
  foods: Food[];
}

export interface GetCartResponse {
  foods: Food[];
}
