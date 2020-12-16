import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { WordComponent } from './directives/word/word.component';
import { ColorComponent } from './pages/color/color.component';
import { TodoComponent } from './todo/todo.component';
// /cv
const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: DetailPersonneComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:couleur', component: ColorComponent },
  { path: 'word', component: WordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
