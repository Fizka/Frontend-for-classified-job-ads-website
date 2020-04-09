import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../Model/chat/message";
import {Observable} from "rxjs";
import {Advertisement} from "../advertisement";
import {MessageService} from "../Model/chat/message.service";

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  message :  Observable<Message[]>;

  constructor(private messageService : MessageService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    //this.message = this.messageService();
  }

}
