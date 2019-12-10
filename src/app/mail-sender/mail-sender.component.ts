import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../message";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.css']
})
export class MailSenderComponent implements OnInit {

  submitted = false;
  message: Message = new Message();

  constructor(private dataService: MessageService) { }

  ngOnInit() {
  }

  newMessage(): void {
    this.submitted = false;
    this.message = new Message();
  }

  sendFeedback(): void {
    this.dataService.postFeedback(this.message)
      .subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      },
      err => {
        alert("An error has occurred while sending mail - Hej you!");
      }
    );
    this.message = new Message();
  }

  onSubmit() {
    this.sendFeedback();
  }

}


