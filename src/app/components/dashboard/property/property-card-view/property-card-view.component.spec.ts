import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardViewComponent } from './property-card-view.component';

describe('PropertyCardViewComponent', () => {
  let component: PropertyCardViewComponent;
  let fixture: ComponentFixture<PropertyCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCardViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
