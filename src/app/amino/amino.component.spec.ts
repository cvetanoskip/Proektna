import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminoComponent } from './amino.component';

describe('AminoComponent', () => {
  let component: AminoComponent;
  let fixture: ComponentFixture<AminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AminoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
