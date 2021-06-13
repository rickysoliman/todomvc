import { Component } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { TodosService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";
import { TodoInterface } from "../../types/todo.interface";
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-todos-main',
    template: `
        <section class="main" [ngClass]="{ hidden: noTodoClass$ | async }">
            <input 
                id="toggle-all" 
                class="toggle-all" 
                type="checkbox" 
                [checked]="areAllTodosSelected$ | async" 
                (change)="toggleAllTodos($event)"
            />
            <label for="toggle-all">Mark all as completed</label>
            <ul class="todo-list">
                <app-todos-todo 
                    *ngFor="let todo of visibleTodos$ | async"
                    [todo]="todo"
                ></app-todos-todo>
            </ul>
        </section>
    `
})
export class MainComponent{
    visibleTodos$: Observable<TodoInterface[]>;
    noTodoClass$: Observable<boolean>
    areAllTodosSelected$: Observable<boolean>

    constructor(private todoService: TodosService) {
        this.areAllTodosSelected$ = this.todoService.todos$.pipe(
            map(todos => todos.every((todo => todo.isCompleted)))
        );
        this.noTodoClass$ = this.todoService.todos$.pipe(
            map(todos => todos.length === 0)
        );
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

    toggleAllTodos(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.todoService.toggleAll(target.checked);
    }
}