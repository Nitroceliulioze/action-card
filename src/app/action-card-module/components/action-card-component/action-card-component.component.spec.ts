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
});
