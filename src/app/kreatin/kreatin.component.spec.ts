import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreatinComponent } from './kreatin.component';

describe('KreatinComponent', () => {
  let component: KreatinComponent;
  let fixture: ComponentFixture<KreatinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KreatinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KreatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
