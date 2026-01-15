import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitEnquery } from './submit-enquery';

describe('SubmitEnquery', () => {
  let component: SubmitEnquery;
  let fixture: ComponentFixture<SubmitEnquery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitEnquery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitEnquery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
