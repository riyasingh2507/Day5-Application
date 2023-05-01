import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ChildComponent } from './child/child.component';
import { LoggerService } from './logger.service';
import { SpyDirective } from './spy.directive';


@NgModule({
  declarations: [
    AppComponent,
    GrandChildComponent,
    ChildComponent,
    SpyDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
