import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosService } from "./services/todos.service";
import { MainComponent } from "./components/main/main.component";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./components/todo/todo.component";

const routes: Routes = [
    {
        path: '',
        component: TodosComponent
    }
];

@NgModule({
    declarations: [
        TodoComponent,
        TodosComponent,
        HeaderComponent,
        MainComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [TodosService]
})
export class TodosModule {}