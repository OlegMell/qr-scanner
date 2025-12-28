import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListButton } from './edit-list-button';

describe('EditListButton', () => {
  let component: EditListButton;
  let fixture: ComponentFixture<EditListButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditListButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditListButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
