import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinzenaFormComponent } from './quinzena-form.component';

describe('QuinzenaFormComponent', () => {
  let component: QuinzenaFormComponent;
  let fixture: ComponentFixture<QuinzenaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuinzenaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuinzenaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
