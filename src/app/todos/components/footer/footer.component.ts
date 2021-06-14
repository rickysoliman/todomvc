import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-todos-footer',
    template: `
        <footer class="footer"
            [ngClass]="{hidden: noTodosClass$ | async}">
            footer
        </footer>
    `
})
export class FooterComponent {
    noTodosClass$: Observable<boolean>;
    constructor(private todoService: TodosService) {
        this.noTodosClass$ = this.todoService.todos$.pipe(
            map(todos => todos.length === 0)
        );
    }
}