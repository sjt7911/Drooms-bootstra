import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})

export class UserModule {}
