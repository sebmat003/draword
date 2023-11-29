import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICategory } from '../../../../models/room.model';

@Component({
  selector: 'app-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICategory) {}
}
