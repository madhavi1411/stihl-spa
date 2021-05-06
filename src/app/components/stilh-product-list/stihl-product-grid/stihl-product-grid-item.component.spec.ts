import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StihlProductGridItemComponent } from './stihl-product-grid-item.component';

describe('StihlProductGridItemComponent', () => {
  let component: StihlProductGridItemComponent;
  let fixture: ComponentFixture<StihlProductGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StihlProductGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StihlProductGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
