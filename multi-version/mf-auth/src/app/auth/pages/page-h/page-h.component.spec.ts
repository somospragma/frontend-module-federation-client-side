import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHComponent } from './page-h.component';

describe('PageHComponent', () => {
  let component: PageHComponent;
  let fixture: ComponentFixture<PageHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHComponent]
    });
    fixture = TestBed.createComponent(PageHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
