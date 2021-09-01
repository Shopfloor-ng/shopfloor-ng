import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Step } from '../model/step';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})
export class StepListComponent implements OnInit {
  filter: string | undefined;
  steps: Step[] = [];
  constructor(private api: ApiService) { }

  EnterSubmit(event: { keyCode: number; }, form: any) {
    //keycode for Enter is 13 
    if (event.keyCode === 13) {
      //calling submit method if key pressed is Enter.
      this.SubmitForm(form);
    }
  }
  SubmitForm(form: any) {
    // console.log(form.value);
    this.filter = form.value.searchbox;
    this.refreshSteps();
  }

  refreshSteps() {
    // console.log(this.filter);
    this.api.getStep(undefined, undefined, this.filter)
      .subscribe(data => {
        // console.log(data)
        this.steps = data;
      })
  }

  ngOnInit(): void {
    this.refreshSteps();
  }

}
