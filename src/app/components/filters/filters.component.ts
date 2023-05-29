import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})

export class FiltersComponent {
  @Output()
  public onSearch: EventEmitter<Task> = new EventEmitter();

  @Output()
  public onReset: EventEmitter<void> = new EventEmitter();

  public taskFilter: Task = { description: '', priority: '', dueDate: '' };

  emitSearch(): void {
    console.log(this.taskFilter);

    if( this.taskFilter.description.length === 0 && this.taskFilter.priority.length === 0) return;

    this.onSearch.emit(this.taskFilter);

    this.taskFilter = { description: '', priority: '', dueDate: ''};
  }

  emitReset(): void {
    this.onReset.emit();
  }
}
