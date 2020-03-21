import { NgModule } from '@angular/core';
import { MessagesAngularComponent } from './messages-angular.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MessagesAngularComponent],
  imports: [
    HttpClientModule
  ],
  exports: [MessagesAngularComponent]
})
export class MessagesAngularModule { }
