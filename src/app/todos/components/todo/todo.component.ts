import { Component, Input } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";

@Component({
    selector: 'app-todos-todo',
    template: `
        <li>{{ todoProps.text }}</li>
        <span>{{ todoProps.isCompleted }}</span>
    `
})
export class TodoComponent {
    @Input('todo') todoProps!: TodoInterface;
}