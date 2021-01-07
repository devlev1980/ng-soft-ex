import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() {
  }

  setItemInSessionStorage(words): void {
    sessionStorage.setItem('words', JSON.stringify(words));
  }

  getItemFromSessionStorage(): any {
    return JSON.parse(sessionStorage.getItem('words'));
  }
}
