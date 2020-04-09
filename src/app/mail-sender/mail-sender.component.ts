import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../Model/chat/message";
import {MessageService} from "../Model/chat/message.service";
import {MessService} from "./mess.service";
import {mess} from "./mess";


@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.css']
})
export class MailSenderComponent implements OnInit {

  me : mess;
  submitted = false;
  message: Message = new Message();

  constructor(private dataService: MessageService, private  messService : MessService) { }

  ngOnInit() {

  }

  //czyszczenie
  newMessage(): void {
    this.submitted = false;
    this.me = new mess();
  }

  //wyslanie wiadmosci
  sendFeedback(): void {
    this.messService.sendMessage(this.me)
      .subscribe(
      data => {
        console.log(data);
      }
    );
    this.submitted = true;
    this.me = new mess();
  }

  //zapis
  onSubmit() {
    this.sendFeedback();
  }

}


