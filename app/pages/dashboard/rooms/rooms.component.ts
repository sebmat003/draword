import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from 'ClientApp/app/models/room.model';
import { RoomsService } from 'ClientApp/app/_core/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  dataSource: MatTableDataSource<Room> = new MatTableDataSource(this.roomsService.dummyRooms);
  displayedColumns: string[] = ['id', 'categories', 'goal', 'drawing_time', 'players', 'password', 'creator', 'action'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private roomsService: RoomsService) { }
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}
