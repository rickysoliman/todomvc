import { Component } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { TodosService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";
import { TodoInterface } from "../../types/todo.interface";
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-todos-main',
    template: `
        <ul class="todo-list">
            <li *ngFor="let todo of visibleTodos$ | async">
                {{ todo.text }}
            </li>
        </ul>
    `
})
export class MainComponent{
    visibleTodos$: Observable<TodoInterface[]>;

    constructor(private todoService: TodosService) {
        this.visibleTodos$ = combineLatest(
            this.todoService.todos$,
            this.todoService.filter$
        ).pipe(
            map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
            if (filter === FilterEnum.active) {
                return todos.filter(todo => !todo.isCompleted);
            } else if (filter === FilterEnum.completed) {
                return todos.filter(todo => todo.isCompleted);
            }
            return todos;
        }));
    }
}