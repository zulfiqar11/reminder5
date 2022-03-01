import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // todo: practice and learn promise
    const promise = new Promise((resolve, reject) => {
      resolve(9);
    })

    promise.then((val) => {console.log(val)});

  }

}
