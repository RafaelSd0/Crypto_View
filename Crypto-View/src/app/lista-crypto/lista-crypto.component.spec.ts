import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCryptoComponent } from './lista-crypto.component';

describe('ListaCryptoComponent', () => {
  let component: ListaCryptoComponent;
  let fixture: ComponentFixture<ListaCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
