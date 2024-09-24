import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaisPageComponent } from './materiais-page.component';

describe('MateriaisPageComponent', () => {
  let component: MateriaisPageComponent;
  let fixture: ComponentFixture<MateriaisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaisPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriaisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
