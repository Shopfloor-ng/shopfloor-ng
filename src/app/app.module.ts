import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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
import { SettingsComponent } from './settings/settings.component';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModuleListComponent,
    EpicListComponent,
    StepListComponent,
    ModuleDetailComponent,
    StepDetailComponent,
    EpicDetailComponent,
    SettingsComponent,
    ApiDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
