import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myUID = 0;

  constructor(
    private _msgService: MessageService
  ) { }

  ngOnInit() {
    this._msgService.setMyUID(this.myUID);
  }
}
