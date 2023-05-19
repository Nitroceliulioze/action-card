import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardComponentComponent } from './action-card-component.component';

describe('ActionCardComponentComponent', () => {
  let component: ActionCardComponentComponent;
  let fixture: ComponentFixture<ActionCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit editCardAction when edit() is called', () => {
    spyOn(component.editCardAction, 'emit');
    component.edit();
    expect(component.editCardAction.emit).toHaveBeenCalled();
  });

  it('should emit actionCardAction when action() is called', () => {
    spyOn(component.actionCardAction, 'emit');
    component.action();
    expect(component.actionCardAction.emit).toHaveBeenCalled();
  });

  it('should emit deleteCardAction when delete() is called', () => {
    spyOn(component.deleteCardAction, 'emit');
    component.delete();
    expect(component.deleteCardAction.emit).toHaveBeenCalled();
  });
  
});
