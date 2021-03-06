import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
      {id: '3', text: 'Added logs', date: new Date('12/27/2017 12:00:23')}
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setformLog(log: Log) {
    this.logSource.next(log);
  }

}
