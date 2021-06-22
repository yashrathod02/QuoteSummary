import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesDisComponent } from './quotes-dis.component';

describe('QuotesDisComponent', () => {
  let component: QuotesDisComponent;
  let fixture: ComponentFixture<QuotesDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
