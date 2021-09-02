import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { Step } from '../model/step';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class StepListComponent implements OnInit {
  filter: string | undefined;
  steps: Step[] = [];
  selectedStep?: Step;
  modalText = "New Step";
  loadingTable=false;

  constructor(private api: ApiService, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  editStep(step: Step, content: any) {
    this.selectedStep = step;
    this.modalText = "Edit Step";
    this.modalService.open(content);
  }

  newStep(content: any) {
    this.selectedStep = new Step();
    this.modalText = "New Step";
    this.modalService.open(content);
  }

  saveStep(step?: Step) {
    if(this.selectedStep!!) {
      const apires = this.api.saveStep(this.selectedStep);
      console.log(apires);
      this.refreshSteps();
    }
  }

  deleteStep(step?: Step) {
    if(this.selectedStep!!) {
      const apires = this.api.deleteStep(this.selectedStep._id);
      console.log(apires);
      this.refreshSteps();
    }
  }


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
    this.loadingTable=true;
    this.api.getStep(undefined, undefined, this.filter)
      .subscribe(data => {
        // console.log(data)
        this.steps = data;
        this.loadingTable=false;
      })
  }

  ngOnInit(): void {
    this.refreshSteps();
  }

}
