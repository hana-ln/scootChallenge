import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Task } from './components/interfaces/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'challengeApp';

  public tasks:Task[] = [];
  private tasksBK:Task[] = [];

  constructor(private tasksService: TasksService){
    tasksService.getTasks().subscribe(
      (response: string) => {
        let tasksText = response.split('\n');

        tasksText.forEach(element => {
          if(element != ''){
            const task:Task = {
              description: element.split(',')[0].trim(),
              dueDate: element.split(',')[1].trim(),
              priority: element.split(',')[2].trim(),
            }
            this.tasks.push(task);
          }
        });
        this.tasksBK = this.tasks;
      });
  }

  onSearch(filter: Task) {
    console.log('Filters', filter);
    this.tasks = this.tasksBK;
    if(filter.description !== ''){
      this.tasks = this.tasks.filter(task => task.description.toLowerCase().includes(filter.description.toLowerCase()));
    }

    if(filter.priority !== ''){
      this.tasks = this.tasks.filter(task => task.priority.toLowerCase().includes(filter.priority.toLowerCase()));
    }
  }

  onReset() {
    this.tasks = this.tasksBK;
  }
}
