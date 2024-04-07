import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);

  city='Porto Alegre'
  data: any;

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=10ea467a47af0c94d933380eec746a33&units=metric`).subscribe(data => {
      this.data = data;
    });
  }
}
