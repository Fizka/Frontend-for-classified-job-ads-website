import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../service/message.service";
import {Mess} from "../../model/mess";
import {MessService} from "../../service/mess.service";


@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.css']
})
export class MailSenderComponent implements OnInit {

  me: Mess;
  submitted = false;
  submitted2 = true;

  constructor(private dataService: MessageService, private  messService: MessService) {
  }

  ngOnInit() {

  }

  newMessage(): void {
    this.submitted = false;
    this.submitted2 = false;
    this.me = new Mess();
  }

  sendFeedback(): void {
    this.messService.sendMessage(this.me)
      .subscribe(
        data => {
          console.log(data);
        }
      );
    this.submitted = true;
    this.me = new Mess();
  }

  onSubmit() {
    this.submitted2 = false;
    this.sendFeedback();
  }

}


