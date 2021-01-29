import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-info-modal',
  templateUrl: './player-info-modal.component.html',
  styleUrls: ['./player-info-modal.component.scss']
})
export class PlayerInfoModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlayerInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {}

}
