import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  standalone: true,
  imports: [MatDialogContent, MatDialogClose, MatDialogActions, MatDialogTitle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: unknown) {}
}
