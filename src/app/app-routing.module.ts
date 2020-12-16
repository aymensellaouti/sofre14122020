import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackComponent } from './components/back/back.component';
import { FirstComponent } from './components/first/first.component';
import { FrontComponent } from './components/front/front.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { WordComponent } from './directives/word/word.component';
import { ColorComponent } from './pages/color/color.component';
import { TodoComponent } from './todo/todo.component';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'cv',
        children: [
          { path: '', component: CvComponent },
          { path: 'add', component: AddPersonneComponent },
          { path: ':id', component: DetailPersonneComponent },
        ],
      },
      { path: 'todo', component: TodoComponent },
      { path: 'color/:couleur', component: ColorComponent },
      { path: 'word', component: WordComponent },
    ],
  },
  {
    path: 'admin',
    component: BackComponent,
    children: [
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
    ],
  },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
