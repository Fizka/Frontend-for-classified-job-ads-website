import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../Model/chat/message";
import {MessageService} from "../Model/chat/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()  message : Message;
  submitted=false;

  constructor(private messageService : MessageService) { }

  ngOnInit() {
    this.reloadData()
  }

  newMessage(){

  }

  Delete(){

  }

  reloadData() {}

}
