import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTypeComponent } from './components/show-type/show-type.component';

const routes: Routes = [
  { path: '', component: ShowTypeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
