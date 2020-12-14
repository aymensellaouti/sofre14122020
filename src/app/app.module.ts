import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './pages/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './pages/rotating-card/rotating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
