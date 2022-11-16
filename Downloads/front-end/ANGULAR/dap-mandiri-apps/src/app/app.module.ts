import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';


const imports = [BrowserModule,SharedModule,PagesModule]
@NgModule({
  declarations: [AppComponent],
  imports: [imports],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
