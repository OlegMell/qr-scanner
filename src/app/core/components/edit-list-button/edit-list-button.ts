import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button [editListButton]',
  exportAs: 'editListButton',
  templateUrl: './edit-list-button.html',
  styleUrl: './edit-list-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditListButton {

}
