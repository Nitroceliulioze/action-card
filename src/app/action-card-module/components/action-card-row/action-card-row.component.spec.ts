import { ActionCardContentInterface } from './../action-card-component/action-card-content-interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardRowComponent } from './action-card-row.component';

describe('ActionCardRowComponent', () => {
  let component: ActionCardRowComponent;
  let fixture: ComponentFixture<ActionCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionCardRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionCardRowComponent);
    component = fixture.componentInstance;
    component.row = {
      cardRowTitle: 'Sample Title',
      isDeletableAction: false,
      cardRowListItems: ['Item 1', 'Item 2', 'Item 3'],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isListOpen when toggleList() is called', () => {
    component.isListOpen = false;
    component.toggleList();
    expect(component.isListOpen).toBe(true);

    component.toggleList();
    expect(component.isListOpen).toBe(false);
  });

  it('should emit editCardRow when onEdit() is called', () => {
    spyOn(component.editCardRow, 'emit');
    component.onEdit();
    expect(component.editCardRow.emit).toHaveBeenCalled();
  });

  it('should emit deleteCardRow when onDelete() is called', () => {
    spyOn(component.deleteCardRow, 'emit');
    component.onDelete();
    expect(component.deleteCardRow.emit).toHaveBeenCalled();
  });

  it('should emit actionCardRow when onAction() is called', () => {
    spyOn(component.actionCardRow, 'emit');
    component.onAction();
    expect(component.actionCardRow.emit).toHaveBeenCalled();
  });
  it('should close the popover', () => {
    component.showPopover = true;
    component.closePopover();
    expect(component.showPopover).toBeFalse();
  });
});
