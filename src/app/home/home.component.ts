import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // todo: demo of bad http error.
    // this.http.get('some bad home component url')
    //   .subscribe(
    //     (response) => {console.log(response)}
    //   )
  }

}
