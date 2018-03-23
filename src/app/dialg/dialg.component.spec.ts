import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialgComponent } from './dialg.component';

describe('DialgComponent', () => {
  let component: DialgComponent;
  let fixture: ComponentFixture<DialgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
