import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAddComponent } from './quotes-add.component';

describe('QuotesAddComponent', () => {
  let component: QuotesAddComponent;
  let fixture: ComponentFixture<QuotesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
