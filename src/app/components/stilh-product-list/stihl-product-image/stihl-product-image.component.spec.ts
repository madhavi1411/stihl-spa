import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StihlProductImageComponent } from './stihl-product-image.component';

describe('StihlProductImageComponent', () => {
  let component: StihlProductImageComponent;
  let fixture: ComponentFixture<StihlProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StihlProductImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StihlProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
