import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  chats: Message[] = [];

  constructor(
    private _msgService: MessageService
  ) { }

  ngOnInit(): void {

    this.chats = this._msgService.getAll();
  }

}
