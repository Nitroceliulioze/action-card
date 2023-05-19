import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { ActionCardRowComponent } from 'src/app/action-card-module/components/action-card-row/action-card-row.component';
import { ActionCardComponentComponent } from 'src/app/action-card-module/components/action-card-component/action-card-component.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent,  ActionCardComponentComponent, ActionCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call edit and log "edit"', () => {
    spyOn(console, 'log'); // Spy on console.log to check if it's called
    component.edit();
    expect(console.log).toHaveBeenCalledWith('edit');
  });

  it('should call delete and log "delete"', () => {
    spyOn(console, 'log');
    component.delete();
    expect(console.log).toHaveBeenCalledWith('delete');
  });

  it('should call action and log "action"', () => {
    spyOn(console, 'log');
    component.action();
    expect(console.log).toHaveBeenCalledWith('action');
  });

});
