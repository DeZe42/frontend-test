import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./components/button/button.component";
import {FilterElementComponent} from "./components/filter-element/filter-element.component";
import {FiltersService} from "./services/filters.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, FilterElementComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-test';
}
