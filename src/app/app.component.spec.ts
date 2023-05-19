import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActionCardComponentComponent } from './action-card-module/components/action-card-component/action-card-component.component';
import { ActionCardRowComponent } from './action-card-module/components/action-card-row/action-card-row.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        ActionCardComponentComponent,
        ActionCardRowComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'action-card'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('action-card');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const actionCardComponent = compiled.querySelector('app-action-card-component');
    const titleElement = actionCardComponent.querySelector('.card-title');

    expect(titleElement.textContent).toContain(actionCardComponent.title);
  });
});
