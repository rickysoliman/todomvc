import { Component } from "@angular/core";

@Component({
    selector: 'app-todos',
    template: `
        <div class="todoapp">
            <app-todos-header></app-todos-header>
            <app-todos-main></app-todos-main>
        </div>
    `
})
export class TodosComponent{}