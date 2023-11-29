import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ICategory } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/_core/services/rooms.service';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryModalComponent } from './delete-category-modal/delete-category-modal.component';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateRoomComponent {
  public private = false;
  public isPassword = false;
  public password: string | null = null;
  public players = Array.from({ length: 12 }, (_, i) => i + 1);
  public maxPlayers = 8;
  public goalPoints = 1000;
  public points = [500, 1000, 1500, 2000, 2500];
  public timeDrawing = '1min';
  public times = ['30s', '1min', '2min', '3min'];
  public categories: ICategory[] = this.roomsService.dummyCategories;
  public selectedCategories: ICategory[] = this.categories;

  constructor(
    private roomsService: RoomsService,
    private dialog: MatDialog,
  ) {}

  public selectAllCategories(e: MatCheckboxChange): void {
    this.selectedCategories = this.categories.map((category: ICategory) => {
      category.selected = e.checked;
      return category;
    });
  }

  public openCategoryDialog(): void {
    this.dialog.open(AddCategoryModalComponent).afterClosed().subscribe();
  }

  public openDeleteCategoryDialog(category: ICategory): void {
    this.dialog
      .open(DeleteCategoryModalComponent, {
        data: category,
      })
      .afterClosed()
      .subscribe();
  }
}
