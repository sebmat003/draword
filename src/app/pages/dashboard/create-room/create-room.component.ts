import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { ICategory } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/_core/services/rooms.service';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { DeleteCategoryModalComponent } from './delete-category-modal/delete-category-modal.component';

interface ISelectedCategory extends ICategory {
  selected: boolean;
}

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
})
export class CreateRoomComponent implements OnInit {
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
  public selectedCategories: ISelectedCategory[] = [];

  constructor(private roomsService: RoomsService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.selectedCategories = this.selectedCategories = this.mapCategories(
      this.categories,
      false
    );
  }

  public selectAllCategories(e: MatCheckboxChange): void {
    if (e.checked) {
      this.selectedCategories = this.mapCategories(
        this.selectedCategories,
        true
      );
    } else {
      this.selectedCategories = this.mapCategories(
        this.selectedCategories,
        false
      );
    }
  }

  public mapCategories(category: any, selectAll: boolean): ISelectedCategory[] {
    category = category.map((e: ISelectedCategory) => {
      e.selected = selectAll;
      return e;
    });
    return category;
  }

  public openCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryModalComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  public openDeleteCategoryDialog(category: ICategory): void {
    const dialogRef = this.dialog.open(DeleteCategoryModalComponent, {
      data: {
        ...category,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
