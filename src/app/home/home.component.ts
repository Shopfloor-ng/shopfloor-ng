import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _success = new Subject<string>();

  successMessage = '';

  @ViewChild('staticAlert', {static: false}) staticAlert?: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert?: NgbAlert;

  ngOnInit(): void {

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  public changeSuccessMessage() { 
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
  // constructor() { }

}
