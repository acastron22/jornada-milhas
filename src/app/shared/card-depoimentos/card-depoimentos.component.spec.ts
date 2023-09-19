import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepoimentosComponent } from './card-depoimentos.component';

describe('CardDepoimentosComponent', () => {
  let component: CardDepoimentosComponent;
  let fixture: ComponentFixture<CardDepoimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDepoimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
