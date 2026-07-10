import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { concat, concatMap, delay, of, repeat } from 'rxjs';

interface PhraseState {
  text: string;
  visible: boolean;
  final: boolean;
}

@Component({
  selector: 'app-cinema',
  imports: [CommonModule],
  templateUrl: './cinema.html',
  styleUrl: './cinema.css',
})
export class Cinema {
  readonly phrases = [
    'TWS',
    'ESTE AÑO',
    'SPIDERMAN LANDING',
    'CONTACTA AHORA',
    'EXCLUSIVAMENTE 100 SPEED INSIGHTS',
  ];

  readonly phraseState$ = of(...this.phrases).pipe(
    concatMap((text, index) => {
      const final = index === this.phrases.length - 1;

      return concat(
        of({
          text,
          visible: true,
          final,
        }),

        of({
          text,
          visible: true,
          final,
        }).pipe(delay(1200)),

        of({
          text,
          visible: false,
          final,
        }).pipe(delay(1800))
      );
    }),

    repeat()
  );
}
