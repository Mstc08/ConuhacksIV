import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { InformationComponent } from './information/information.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'information', component: InformationComponent },
  { path: 'result', component: ResultComponent, data: {} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
