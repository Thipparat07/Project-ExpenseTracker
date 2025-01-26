import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ExpenseTracker-ui';
}
