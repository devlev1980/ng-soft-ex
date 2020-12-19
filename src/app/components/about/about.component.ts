import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubSink} from "subsink";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
