import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './pages/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './pages/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { TestNgStyleComponent } from './directives/test-ng-style/test-ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { TestNgClassComponent } from './directives/test-ng-class/test-ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { EuroDollarPipe } from './pipes/euro-dollar.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { LoggerService } from './services/logger.service';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TestReactiveFormComponent } from './components/test-reactive-form/test-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    TestNgStyleComponent,
    WordComponent,
    TestNgClassComponent,
    HighlightDirective,
    RainbowDirective,
    EuroDollarPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    AddPersonneComponent,
    BackComponent,
    FrontComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
