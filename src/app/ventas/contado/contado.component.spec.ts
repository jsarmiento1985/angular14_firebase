import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadoComponent } from './contado.component';

describe('ContadoComponent', () => {
  let component: ContadoComponent;
  let fixture: ComponentFixture<ContadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
