import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class TasksService {

  private httpClient: HttpClient;
  public data: any;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  getTasks(): Observable<any> {
    return this.httpClient.get('assets/tasks.txt', { responseType: 'text' });
  }
}
