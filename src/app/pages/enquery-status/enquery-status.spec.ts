import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueryStatus } from './enquery-status';

describe('EnqueryStatus', () => {
  let component: EnqueryStatus;
  let fixture: ComponentFixture<EnqueryStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnqueryStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueryStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
