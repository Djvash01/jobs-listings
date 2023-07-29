import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
