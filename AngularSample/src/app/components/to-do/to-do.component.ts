import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  public categories = [
    {
      id: 'list1',
      name: 'My Day',
      icon: 'ms-Icon ms-Icon--Sunny',
    },
    {
      id: 'list2',
      name: 'Important',
      icon: 'ms-Icon ms-Icon--FavoriteStar',
    },
    {
      id: 'list3',
      name: 'Planned',
      icon: 'ms-Icon ms-Icon--Calendar',
    },
    {
      id: 'list4',
      name: 'Assigned to you',
      icon: 'ms-Icon ms-Icon--Contact',
    },
    {
      id: 'list5',
      name: 'Tasks',
      icon: 'ms-Icon ms-Icon--Home',
    },
  ];
  totalTaskCount = 0;
  currentListId = 'list5';
  currentListName = 'Tasks';
  allTasks: task[] = [
    {
      name: '',
      id: '',
      categoryId: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  currentCategory(event: string) {
    this.currentListId = event;
    this.currentListName = this.categories[
      this.categories.findIndex((category) => category.id == event)
    ].name;
    console.log(this.currentListId);
  }

  createTask(event: string) {
    this.totalTaskCount += 1;
    this.allTasks.push({
      id: 'task' + this.totalTaskCount,
      name: event,
      categoryId: this.currentListId
    });
    
  }
}

interface task {
  id: string;
  name: string;
  categoryId: string;
}
