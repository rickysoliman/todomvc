import { Component } from "@angular/core";

@Component({
    selector: 'app-todos-header',
    template: `
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autoFocus>
        </header>
    `
})
export class HeaderComponent{}