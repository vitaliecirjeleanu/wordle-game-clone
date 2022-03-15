import { Component, OnInit, HostListener } from '@angular/core';

import { GridWordsService } from '../shared/grid-words.service';
import { KeyboardLetters } from '../shared/keyboardLetters';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  letters: KeyboardLetters = this.girdService.keyboardLetters;

  constructor(private girdService: GridWordsService) { }

  ngOnInit(): void {
  }

  onKeyClick(letter: string): void {
    this.girdService.clickKey(letter);
  }

  onDelete(): void {
    this.girdService.deleteKey();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Backspace') {
      this.girdService.deleteKey();
    } else if (e.key.match(/^[a-z]$/) || e.key.match(/^[A-Z]$/) || e.key === 'Enter') {
      this.girdService.clickKey(e.key.toLowerCase());
    }
  }
}
