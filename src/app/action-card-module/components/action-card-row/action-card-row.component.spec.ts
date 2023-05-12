import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCardRowComponent } from './action-card-row.component';

describe('ActionCardRowComponent', () => {
  let component: ActionCardRowComponent;
  let fixture: ComponentFixture<ActionCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
