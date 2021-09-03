import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { Step } from '../model/step';

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})
export class StepDetailComponent implements OnChanges {

  @Input() inputStep?: Step;
  @Input() calledModal = false;
  step: Step = new Step();
  constructor(private api: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inputStep!!) {
      console.log(this.inputStep);
      this.loadStep(this.inputStep);
    }
  }

  loadStep(step: Step) {
    if (this.inputStep!!) {
      this.step = { ...this.inputStep };
    }
  }

  saveStep() {
    if(this.step!!) {
      const apires = this.api.saveStep(this.step);
      console.log(apires);
    }
  }

  deleteStep() {
    if(this.step!!) {
      const apires = this.api.deleteStep(this.step._id);
      console.log(apires);
    }
  }
}