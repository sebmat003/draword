import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRoom } from 'src/app/models/room.model';
import { RoomsService } from 'src/app/_core/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  public dataSource: MatTableDataSource<IRoom> = new MatTableDataSource(
    this.roomsService.dummyRooms
  );
  public displayedColumns: string[] = [
    'id',
    'categories',
    'goal',
    'drawing_time',
    'players',
    'password',
    'creator',
    'action',
  ];
  @ViewChild(MatSort, { static: false }) public sort!: MatSort;

  constructor(private roomsService: RoomsService) {}
  public ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
