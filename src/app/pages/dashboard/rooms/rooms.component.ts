import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IRoom } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/_core/services/rooms.service';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  standalone: true,
  imports: [
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatBadgeModule,
    NgForOf,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) public sort!: MatSort;
  public readonly displayedColumns: string[] = [
    'id',
    'categories',
    'goal',
    'drawing_time',
    'players',
    'password',
    'creator',
    'action',
  ];
  public dataSource: MatTableDataSource<IRoom> = new MatTableDataSource(
    this.roomsService.dummyRooms,
  );

  constructor(private roomsService: RoomsService) {}

  public ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
