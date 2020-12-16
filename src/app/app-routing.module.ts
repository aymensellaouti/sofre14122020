import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { WordComponent } from './directives/word/word.component';
import { ColorComponent } from './pages/color/color.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color', component: ColorComponent },
  { path: 'word', component: WordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
