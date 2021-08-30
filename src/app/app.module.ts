import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuleListComponent } from './module-list/module-list.component';
import { EpicListComponent } from './epic-list/epic-list.component';
import { StepListComponent } from './step-list/step-list.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { StepDetailComponent } from './step-detail/step-detail.component';
import { EpicDetailComponent } from './epic-detail/epic-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModuleListComponent,
    EpicListComponent,
    StepListComponent,
    ModuleDetailComponent,
    StepDetailComponent,
    EpicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
