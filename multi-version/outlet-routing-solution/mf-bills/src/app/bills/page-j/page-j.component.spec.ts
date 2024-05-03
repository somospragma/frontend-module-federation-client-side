import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJComponent } from './page-j.component';

describe('PageJComponent', () => {
  let component: PageJComponent;
  let fixture: ComponentFixture<PageJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
