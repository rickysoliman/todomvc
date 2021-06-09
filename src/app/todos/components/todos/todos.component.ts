import { Component } from "@angular/core";

@Component({
    selector: 'app-todos',
    template: `
        <div class="todoapp">
            <app-todos-header></app-todos-header>
        </div>
    `
})
export class TodosComponent{}