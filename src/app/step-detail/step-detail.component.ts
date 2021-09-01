import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Step } from '../model/step';

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})
export class StepDetailComponent implements OnChanges {

  @Input() inputStep?: Step;
  step: Step = new Step();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inputStep!!) {
      console.log(this.inputStep);
      this.loadStepFromId(this.inputStep);
    }
  }

  loadStepFromId(step: Step) {
    if (this.inputStep!!) {
      this.step = this.inputStep;
    }
  }

}

