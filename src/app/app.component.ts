import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quote: any = {speaker: 'smeagol', 'quote': 'My precious!' };
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.getQuote();
  }
  getQuote(): void {
    this.http.get('/quote').subscribe(data => {
      console.log(data);
      this.quote = data;
    });
  }
}
