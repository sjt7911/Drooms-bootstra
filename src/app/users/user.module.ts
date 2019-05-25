import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './shared/user.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    UserService
  ]
})

export class UserModule {}
