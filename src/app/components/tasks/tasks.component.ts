import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent {

  @Input()
  public tasks: Task[] = [];
}
