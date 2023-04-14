import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginanoexisteComponent } from './paginanoexiste.component';

describe('PaginanoexisteComponent', () => {
  let component: PaginanoexisteComponent;
  let fixture: ComponentFixture<PaginanoexisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginanoexisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginanoexisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
