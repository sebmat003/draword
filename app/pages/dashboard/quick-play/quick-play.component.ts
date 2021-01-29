import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterSet } from 'ClientApp/app/models/player.model';
import { RoomsService } from 'ClientApp/app/_core/services/rooms.service';

@Component({
  selector: 'app-quick-play',
  templateUrl: './quick-play.component.html',
  styleUrls: ['./quick-play.component.scss']
})
export class QuickPlayComponent implements OnInit {

  characterSet: CharacterSet = {set: [], gender: 'male'};

  constructor(private roomsService: RoomsService, private router: Router) { }

  ngOnInit(): void {
    this.getRandomSet();

  }

  changeElement(type: number, direction: string): void {
    if(direction === 'left') {
      this.characterSet.set[type] = this.characterSet.set[type] === 1 ? 5 : this.characterSet.set[type] - 1;  
    } else if (direction === 'right') {
      this.characterSet.set[type] = this.characterSet.set[type] === 5 ? 1 : this.characterSet.set[type] + 1;  
    }
  }

  getRandomSet(): void {
    const min = 1;
    const max = 5;
    this.characterSet.set = [getRandomInt(min, max), getRandomInt(min, max), getRandomInt(min, max)];

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }

  moveToExistingGame(): void {
    const games = this.roomsService.dummyRooms.filter(el=> el.current_players != el.max_players).sort((a, b) => b.current_players - a.current_players);
    this.router.navigateByUrl('/game/' + games[0].id);
    

  }

}
