import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  username = 'Pepe';
  isLoggedIn = false;
  favGame = '';

  greet(){
    alert('soy bolin');
  }

  getFav(name: string){
    this.favGame = name;
  }
}
