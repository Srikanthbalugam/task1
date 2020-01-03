import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentchildComponent } from './studentchild/studentchild.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentchildComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
