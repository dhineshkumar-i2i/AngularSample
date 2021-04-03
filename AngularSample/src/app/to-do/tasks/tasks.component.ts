import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() currentListId: any;
  @Input() currentListName: any;
  @Input() allTasks:any;
  @Output() newTaskEvent = new EventEmitter;

  newTask: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(event: any) {
    if (event.which == '13') {
      console.log(this.newTask);
      this.newTaskEvent.emit(this.newTask);
      this.newTask = "";
    }
  }

}
