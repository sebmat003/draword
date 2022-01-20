import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPlayer } from 'src/app/models/player.model';
import { ITab } from 'src/app/models/tab.model';
import { AuthService } from 'src/app/_core/services/auth.service';
import { PlayersService } from 'src/app/_core/services/players.service';
import { PlayerInfoModalComponent } from '../modals/player-info-modal/player-info-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tabs: ITab[] = [
    {
      label: 'Quick Play',
      bottom: false,
      url: '/dashboard/quick-play',
      icon: 'fas fa-play',
    },
    {
      label: 'Rooms',
      bottom: false,
      url: '/dashboard/rooms',
      icon: 'fas fa-user-friends',
    },
    {
      label: 'Create Room',
      bottom: false,
      url: '/dashboard/create-room',
      icon: 'fas fa-door-open',
    },
    {
      label: 'Rules',
      bottom: true,
      url: '/dashboard/rules',
      icon: 'fas fa-question-circle',
    },
  ];

  public playersOnline = this.playersService.playersOnline;
  public players = this.playersService.players;
  public displayedColumns = ['name', 'level', 'session_time'];
  public user = this.authService.user;

  constructor(
    private playersService: PlayersService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  public ngOnInit(): void {}

  public openPlayerModal(player: IPlayer): void {
    this.dialog.open(PlayerInfoModalComponent, {
      data: player,
    });
  }
}
