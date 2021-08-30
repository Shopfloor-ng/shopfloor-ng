import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDocsComponent } from './api-docs/api-docs.component';
import { EpicDetailComponent } from './epic-detail/epic-detail.component';
import { EpicListComponent } from './epic-list/epic-list.component';
import { HomeComponent } from './home/home.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { SettingsComponent } from './settings/settings.component';
import { StepDetailComponent } from './step-detail/step-detail.component';
import { StepListComponent } from './step-list/step-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'module-list', component: ModuleListComponent },
  { path: 'module', component: ModuleDetailComponent },
  { path: 'step-list', component: StepListComponent },
  { path: 'step', component: StepDetailComponent },
  { path: 'epic-list', component: EpicListComponent },
  { path: 'epic', component: EpicDetailComponent },
  { path: 'settings/:type', component: SettingsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'api-docs', component: ApiDocsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
