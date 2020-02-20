import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private _contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contacts = this._contactService.getAll();
    this.updateNotifications();
  }

  updateNotifications() {
    this.contacts.map(i => i['notification'] = Math.round(Math.random() * 100));
  }

  selectContact(contact) {
    alert(contact.id);
  }

  selectProfile(event, contact) {
    alert(contact.url);
    event.stopPropagation();
  }

}
