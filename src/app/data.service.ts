import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export interface ICustomer {
  firstName: string;
  lastName: string;
  mobile: IMobile[];
}
export interface IMobile {
  number: string;
}
@Injectable()
export class DataService {
  constructor() {}

  public getCustomer(): Observable<ICustomer[]> {
    return Observable.of(customer);
  }
}

const customer: ICustomer[] = [
  {
    firstName: 'John',
    lastName: 'lews',
    mobile: [
      {
        number: '07948714465'
      },
      {
        number: '07543754465'
      },
      {
        number: '07543754465'
      }
    ]
  },
  {
    firstName: 'John',
    lastName: 'lews',
    mobile: [
      {
        number: '07948714465'
      },
      {
        number: '07543754465'
      }
    ]
  }
];
