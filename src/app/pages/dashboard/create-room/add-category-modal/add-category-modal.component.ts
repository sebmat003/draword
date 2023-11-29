import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCategoryModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: unknown) {}
}
