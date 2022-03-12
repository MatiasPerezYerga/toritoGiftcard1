import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGiftcardComponent } from './buy-giftcard.component';

describe('BuyGiftcardComponent', () => {
  let component: BuyGiftcardComponent;
  let fixture: ComponentFixture<BuyGiftcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyGiftcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
