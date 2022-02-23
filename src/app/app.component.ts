import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reminder 5';

  // todo: only for chrome when the f12 network tab is open, the routing does not seem to work.
  // tried for over an hour.. chrome does not support this.

  // todo: add this project to github
  // todo: add top material navigation
  // todo: add side material navigation
  // tood: add hard coded reminders with material table.
  // todo: add material table for contacts
  // todo: add login screen via reactive form
  // todo: add jwt login
  // todo: add httpinterceptor for jwt login
  // todo: add auth guard for reminders and contacts screen


  ngOnInit(): void {

  }
}
