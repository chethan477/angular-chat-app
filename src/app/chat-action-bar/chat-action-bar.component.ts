import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-action-bar',
  templateUrl: './chat-action-bar.component.html',
  styleUrls: ['./chat-action-bar.component.css']
})
export class ChatActionBarComponent implements OnInit {

  message: string;

  constructor(
    private _msgService: MessageService
  ) { }

  ngOnInit(): void { }

  send() {
    this._msgService.send(this.message);
    this.reset();
  }

  reset() {
    this.message = '';
  }

}
