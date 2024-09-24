import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraTableComponent } from './obra-table.component';

describe('ObraTableComponent', () => {
  let component: ObraTableComponent;
  let fixture: ComponentFixture<ObraTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
