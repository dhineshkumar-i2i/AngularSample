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

  addTask() {
    console.log(this.newTask);
    this.dataModel.createTask(this.newTask);
    this.newTask = '';
  }

  selectedTask(event: any) {
    console.log(event.target.id);
    this.dataModel.currentTask(event.target.id);
  }
}
