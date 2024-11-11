import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3> Los juegos favs de {{username}} </h3>
    <ul>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">{{ game.name }} </li>
      }
    </ul> 
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() favGameEvent = new EventEmitter<string>();

  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon zero Dawn'
    },
    {
      id: 3,
      name : 'Bloodborne'
    }
  ]

  fav(name: string){
    this.favGameEvent.emit(name);
  }

}
