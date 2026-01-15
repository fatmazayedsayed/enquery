import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqueryCategory } from './enquery-category';

describe('EnqueryCategory', () => {
  let component: EnqueryCategory;
  let fixture: ComponentFixture<EnqueryCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnqueryCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnqueryCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
