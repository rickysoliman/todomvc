import { Component } from "@angular/core";
import { TodosService } from "../../services/todos.service";

@Component({
    selector: 'app-todos-header',
    template: `
        <header class="header">
            <h1>todos</h1>
            <input
                class="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                [value]="text"
                (keyup)="changeText($event)"
                (keyup.enter)="addTodo()"/>
        </header>
    `
})
export class HeaderComponent{
    text: string = '';

    constructor(private todoService: TodosService) {
        this.todoService.todos$
            .subscribe(todos => {
                console.log('todos', todos);
            });
    }

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.text = target.value;
    }
    addTodo(): void {
        console.log('addTodo', this.text);
        this.todoService.addTodo(this.text);
    }
}