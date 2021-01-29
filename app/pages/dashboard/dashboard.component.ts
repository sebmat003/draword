import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from 'ClientApp/app/models/player.model';
import { Tab } from 'ClientApp/app/models/tab.model';
import { AuthService } from 'ClientApp/app/_core/services/auth.service';
import { PlayersService } from 'ClientApp/app/_core/services/players.service';
import { PlayerInfoModalComponent } from '../modals/player-info-modal/player-info-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tabs: Tab[] = [
    {label: 'Quick Play', bottom: false, url: '/dashboard/quick-play', icon: 'fas fa-play'},
    {label: 'Rooms', bottom: false, url: '/dashboard/rooms', icon: 'fas fa-user-friends'},
    {label: 'Create Room', bottom: false, url: '/dashboard/create-room', icon: 'fas fa-door-open'},
    {label: 'Rules', bottom: true, url: '/dashboard/rules', icon: 'fas fa-question-circle'}
  ]

  playersOnline = this.playersService.playersOnline;
  players = this.playersService.players;
  displayedColumns = ['name', 'level', 'session_time'];
  user = this.authService.user;

  constructor(private playersService: PlayersService, private authService: AuthService, private dialog: MatDialog){ }

  ngOnInit(): void {
  }

  openPlayerModal(player: Player): void {
    this.dialog.open(PlayerInfoModalComponent, {
      data: player
    });
  }
}
