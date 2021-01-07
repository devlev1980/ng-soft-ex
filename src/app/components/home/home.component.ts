import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubSink} from 'subsink';
import {ApiService} from '../../services/api.service';
import {Word} from '../../models/word';
import {combineLatest, Observable, ObservedValueOf} from 'rxjs';
import {SessionStorageService} from '../../services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  showSpinner: boolean = false;
  words: [ObservedValueOf<Observable<Array<Word>>>, ObservedValueOf<Observable<Array<Word>>>, ObservedValueOf<Observable<Array<Word>>>];
  wordsResult: [ObservedValueOf<Observable<Array<Word>>>, ObservedValueOf<Observable<Array<Word>>>, ObservedValueOf<Observable<Array<Word>>>];
   showResult: boolean = false;

  constructor(private apiService: ApiService, private sessionStorageService: SessionStorageService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onGetData(): void {
    this.showSpinner = true;
    const duckWordAPI = this.apiService.getDuckWordApi();
    const elephantWordAPI = this.apiService.getElephantWordApi();
    const lionWordAPI = this.apiService.getLionWordApi();

    combineLatest(duckWordAPI, elephantWordAPI, lionWordAPI).subscribe((data) => {
      this.words = data;
      this.showResult = false;
      this.sessionStorageService.setItemInSessionStorage(this.words);
    });
    // this.apiService.getDuckWordApi().subscribe((data) => {
    //   if (data) {
    //     this.words = data;
    //     console.log(data);
    //     this.showSpinner = false;
    //   }
    // });
  }

  onShowData(): void {
    this.showResult = true;
    this.wordsResult = this.sessionStorageService.getItemFromSessionStorage();
  }
}
