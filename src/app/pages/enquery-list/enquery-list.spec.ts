import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueryList } from './enquery-list';

describe('EnqueryList', () => {
  let component: EnqueryList;
  let fixture: ComponentFixture<EnqueryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnqueryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
