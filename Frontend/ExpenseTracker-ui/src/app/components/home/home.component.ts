import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private http: HttpClient) { }
  callApi() {
    const url = 'http://localhost:3000/transactions';
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
    });

    console.log('Call Completed');
  }
}
