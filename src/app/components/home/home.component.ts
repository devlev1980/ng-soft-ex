import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubSink} from "subsink";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  showSpinner: boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  onGetData() {
    this.showSpinner = true;
    this.apiService.getApi().subscribe(data => {
      if(data){
        this.showSpinner = false;
      }
    })
  }
}
