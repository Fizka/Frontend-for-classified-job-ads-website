import {Survey} from "./Model/survey/survey";
import {Company} from "./Model/Account/company";
import {Search} from "./Model/advertisement/search";

export class Advertisement {
  idAdvertisement: number;
  title: string;
  industry: string;
  city: string;
  salary : number;
  company : string;
  dateAdded : string;
  periodOfValidity : string;
  contractType : string;
  contents : string;
  companyAdvertisement : Company;
}
