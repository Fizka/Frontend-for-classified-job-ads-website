import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Message} from "../../model/message";
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  message: Observable<Message[]>;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    //this.message = this.messageService();
  }

}
