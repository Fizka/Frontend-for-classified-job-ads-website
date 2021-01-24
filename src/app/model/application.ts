import {Company} from "./company";
import {Employee} from "./employee";
import {Advertisement} from "./advertisement";

export class Applicatrion {
  idApplication : number;
  firstName: string;
  lastName: string;
  phoneNumber : number
  mail : string;
  address: string;
  companyApplication : Company;
  customersApplication  : Employee;
  advertisement : Advertisement;
}
