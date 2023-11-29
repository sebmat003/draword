import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ICategory } from '../../../../models/room.model';

@Component({
  selector: 'app-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  standalone: true,
  imports: [MatDialogContent, MatDialogTitle, MatDialogClose, MatDialogActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICategory) {}
}
