import { Component } from '@angular/core';

@Component({
  selector: 'app-board-grid',
  templateUrl: './board-grid.component.html',
  styleUrls: ['./board-grid.component.scss']
})
export class BoardGridComponent {
  wordsNumber: any[] = new Array(6);
}