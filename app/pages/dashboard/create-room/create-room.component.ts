import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { RoomsService } from 'ClientApp/app/_core/services/rooms.service';
import { Category } from '../../../models/room.model'
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { DeleteCategoryModalComponent } from './delete-category-modal/delete-category-modal.component';

class SelectedCategory extends Category {
  selected = false;
}

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  private = false;

  isPassword = false;
  password: string = null;

  players = Array.from({length: 12}, (_, i) => i + 1);
  maxPlayers = 8;

  goalPoints = 1000;
  points = [500, 1000, 1500, 2000, 2500];

  timeDrawing = '1min';
  times = ['30s', '1min', '2min', '3min'];

  categories: Category[] = this.roomsService.dummyCategories;
  selectedCategories: SelectedCategory[];

  constructor(private roomsService: RoomsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.selectedCategories = this.selectedCategories = this.mapCategories(this.categories, false);
  }

  selectAllCategories(e: MatCheckboxChange): void {
    if(e.checked) {
      this.selectedCategories = this.mapCategories(this.selectedCategories, true);
    } else {
      this.selectedCategories = this.mapCategories(this.selectedCategories, false);
    }
  }

  mapCategories(category, selectAll: boolean): SelectedCategory[] {
    category = category.map((e: SelectedCategory) => {e.selected = selectAll; return e;});
    return category;
  }

  openCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryModalComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDeleteCategoryDialog(category: Category): void {
    const dialogRef = this.dialog.open(DeleteCategoryModalComponent, {
      data: {
        ...category
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
