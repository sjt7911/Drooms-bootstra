import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { UserListComponent } from './users/user-list/user-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'user/:id/edit', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
