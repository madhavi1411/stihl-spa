import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StilhProductListComponent } from './stilh-product-list.component';

describe('StilhProductListComponent', () => {
  let component: StilhProductListComponent;
  let fixture: ComponentFixture<StilhProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StilhProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StilhProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
