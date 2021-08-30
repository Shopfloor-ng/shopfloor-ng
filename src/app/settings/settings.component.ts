import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepDetailComponent } from '../step-detail/step-detail.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  type: string | null | undefined;
  

  constructor(private _ar:ActivatedRoute) {
    //get parameter from route
     this._ar.snapshot.paramMap.get("type");
    this._ar.paramMap.subscribe(param => {
      this.type = param.get('type');
      console.log(this.type);
      if(this.type!==undefined){
        loadSettings(this.type);
      }
    })
   }

  ngOnInit(): void {
  }

}
function loadSettings(type: string | null) {
  switch (type) {
    case 'steps':
      console.log("Steps settings being loaded");
      break;
    case 'modules':
      console.log("Modules settings being loaded");
      break;
  
    case 'epics':
      console.log("Epics settings being loaded");
      break;
    default:
      break;
  }
}

