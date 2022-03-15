import { Component, Input, OnInit } from '@angular/core';

import { GridWordsService } from '../shared/grid-words.service';
import { LettersStatus } from '../shared/lettersStatus';
import { Word } from '../shared/word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  @Input() wordNr: string;

  lettersNumber: any[] = new Array(5);
  gridWord: Word;

  constructor(private gridService: GridWordsService) { }

  ngOnInit(): void {
    this.gridWord = this.getWord();
  }

  getWord(): Word {
    switch(this.wordNr) {
      case '1':
        return this.gridService.words.word1;
      case '2':
        return this.gridService.words.word2;
      case '3':
        return this.gridService.words.word3;
      case '4':
        return this.gridService.words.word4;
      case '5':
        return this.gridService.words.word5;
      case '6':
        return this.gridService.words.word6;
      default: return new Word(false, new LettersStatus([], [], []), [], [], [], [], [], false);
    }
  }

}
