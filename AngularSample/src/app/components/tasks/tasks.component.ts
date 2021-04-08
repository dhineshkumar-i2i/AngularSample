import { Component, OnInit } from '@angular/core';
import { DataModelService } from 'src/app/services/data-model.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  newTask: string = '';

  constructor(public dataModel: DataModelService) {}

  ngOnInit(): void {}

  /**
   * This method calls the service method to create a new task
   */
  addTask(): void {
    this.dataModel.createTask(this.newTask);
    this.newTask = '';
  }

  /**
   * This method updates the selected task by the user when clicked.
   *
   * @param event holds all the information about the click event.
   */
  selectedTask(event: any): void {
    this.dataModel.currentTask(event.target.id);
  }
}
