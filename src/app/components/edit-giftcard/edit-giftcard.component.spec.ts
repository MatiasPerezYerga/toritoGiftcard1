import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiftcardComponent } from './edit-giftcard.component';

describe('EditGiftcardComponent', () => {
  let component: EditGiftcardComponent;
  let fixture: ComponentFixture<EditGiftcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGiftcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
