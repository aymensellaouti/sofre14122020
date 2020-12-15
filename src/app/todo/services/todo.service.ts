import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from 'src/app/services/logger.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService,
    private toaster: ToastrService
  ) {}

  loggerTodo(): void {
    this.loggerService.logger(this.todos);
  }
  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.toaster.success(`todo ${todo.name} ajouté avec succès`);
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.toaster.success(`todo ${todo.name} supprimé avec succès`);
      this.todos.splice(index, 1);
    } else {
      this.toaster.error(` problème de suppression du todo ${todo.name}, il est innexistant`);
    }
  }
}
