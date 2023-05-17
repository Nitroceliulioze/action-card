import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActionCardContentInterface } from './action-card-content-interface';
import { ActionCardRowComponent } from '../action-card-row/action-card-row.component';

@Component({
  selector: 'app-action-card-component',
  templateUrl: './action-card-component.component.html',
  styleUrls: ['./action-card-component.component.scss'],
})
export class ActionCardComponentComponent {
  @Input() isDeletableAction!: boolean;
  @Input() title!: string;
  @Input() titleColor!: string;
  @Input() addActivityText!: string;
  @Input() deleteText!: string;
  @Input() cardContentRow: ActionCardContentInterface[] = [];
  @Output() editCardAction = new EventEmitter();
  @Output() actionCardAction = new EventEmitter();
  @Output() deleteCardAction = new EventEmitter();

 
  edit(): void {
    this.editCardAction.emit();
  }

  action(): void {
    this.actionCardAction.emit();
  }

  delete(): void {
    this.deleteCardAction.emit();
  }
}
