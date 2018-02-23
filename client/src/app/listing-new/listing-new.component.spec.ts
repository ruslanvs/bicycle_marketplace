import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNewComponent } from './listing-new.component';

describe('ListingNewComponent', () => {
  let component: ListingNewComponent;
  let fixture: ComponentFixture<ListingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
