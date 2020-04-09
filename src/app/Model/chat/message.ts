import {User} from "../../user";

export class Message {
  idMessage: number;
  mailSender: string;
  particularsSender : string;
  mailConsignee: string;
  particularsConsignee : string;
  textMessage: string;
  title : string;
  userOne : User;
  userTwo : User;
}
