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
  totalListCount = this.categories.length;
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

  createList(event: string) {
    this.totalListCount += 1;
    this.categories.push({
      id: 'list' + this.totalListCount,
      name: event,
      icon: 'ms-Icon ms-Icon--BulletedList iconSize-24',
    });
  }

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
