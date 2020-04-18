import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTileComponent } from './food-tile.component';

describe('FoodTileComponent', () => {
  let component: FoodTileComponent;
  let fixture: ComponentFixture<FoodTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
