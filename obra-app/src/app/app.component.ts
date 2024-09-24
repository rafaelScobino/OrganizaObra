import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObraPageComponent } from './obra-page/obra-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ObraPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'obra-app';
}
