import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {path: '', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
