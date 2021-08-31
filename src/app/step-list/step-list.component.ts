import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Step } from '../model/step';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})
export class StepListComponent implements OnInit {

  steps: Step[] = [];
  constructor(private api: ApiService) { }

  refreshSteps() {
    this.api.getStep()
      .subscribe(data => {
        console.log(data)
        this.steps = data;
      })
  }

  ngOnInit(): void {
    this.refreshSteps();
  }

}
