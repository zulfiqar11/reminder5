import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../share/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Contact[]> = of([]);

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.contacts$ = this.http.get<Contact[]>('assets/contacts.json')
  }

}
