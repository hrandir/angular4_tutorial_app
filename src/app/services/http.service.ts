import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'RBEKVnmjkBDCBrVe6xBGB6zQ04ksJ6_e');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

    getTasks(): Observable<Array<Task>> {
     return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
    }

    saveTasks(list: Array<Task>) {
      this.http.put(this.URL_DB, list, {params: this.param}).subscribe(list =>{
        console.log(list);
      });
    }
}
