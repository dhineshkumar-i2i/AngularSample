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
  currentListId = 'list5';
  selectedCategory!: category;
  allTasks!: task[];
  tasksToBeDisplayed!: taskModel;

  constructor() {}

  ngOnInit(): void {
    this.currentCategory(this.currentListId);
  }

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
    console.log(this.currentListId);
    this.selectedCategory = this.categories.find(
      (category) => category.id == this.currentListId
    )!;
    console.log(this.selectedCategory);
    this.tasksToBeDisplayed.categoryName = this.selectedCategory.name;
    for (var task of this.allTasks ) {
      if (task.categoryId == this.currentListId) {
        this.tasksToBeDisplayed.tasks.push(task);
      }
    }
  }
}

interface category {
  id: string;
  name: string;
  icon: string;
}

interface task {
  id: string;
  name: string;
  categoryId: string;
  subTask: string[];
}

interface taskModel {
  categoryName: string;
  tasks: task[];
}
