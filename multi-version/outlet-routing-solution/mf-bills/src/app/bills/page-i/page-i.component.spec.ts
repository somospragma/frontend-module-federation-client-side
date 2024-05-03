import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIComponent } from './page-i.component';

describe('PageIComponent', () => {
  let component: PageIComponent;
  let fixture: ComponentFixture<PageIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
