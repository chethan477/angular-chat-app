import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input() myUID: number;

  chats: Message[] = [];

  constructor(
    private _msgService: MessageService
  ) { }

  ngOnInit(): void {
    this._msgService.chats$.subscribe(
      resp => this.chats = [...resp],
      err => alert(err)
    )

    this._msgService.newMessage$.subscribe(
      (resp: Message) => this.chats = [...this.chats, resp],
      err => alert(err)
    )
  }

}
