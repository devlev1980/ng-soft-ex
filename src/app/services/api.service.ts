import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Word} from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getDuckWordApi(): Observable<Array<Word>> {
    return this.http.get<Array<Word>>(`${environment.apiUrl}/words?ml=duck&sp=d*&max=10`);
  }
  getElephantWordApi(): Observable<Array<Word>> {
    return this.http.get<Array<Word>>(`${environment.apiUrl}/words?ml=elephant&sp=e*&max=10`);
  }
  getLionWordApi(): Observable<Array<Word>> {
    return this.http.get<Array<Word>>(`${environment.apiUrl}/words?ml=lion&sp=l*&max=10`);
  }
}
