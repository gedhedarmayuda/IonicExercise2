import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibblePage } from './bibble.page';

describe('BibblePage', () => {
  let component: BibblePage;
  let fixture: ComponentFixture<BibblePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BibblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
