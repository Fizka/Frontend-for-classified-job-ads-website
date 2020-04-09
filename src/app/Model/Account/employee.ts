import {User} from "../../user";

export class Employee{
  idCustomer : number;
  firstName : string;
  lastName : string;
  address : string;
  pesel : number;
  phonenumber : number;
  certificate : boolean;
  course : boolean;
  cv : boolean;
  userCustomer : User;
}
