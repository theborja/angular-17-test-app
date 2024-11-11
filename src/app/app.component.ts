import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { reduce } from 'rxjs';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl:  './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-app';
  city = 'Barcelona';

}
