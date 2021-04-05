import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataModelService {

  categories = [
    {
      id: 'list1',
      name: 'My day',
      icon: 'ms-Icon ms-Icon--Sunny iconSize-24',
    },
    {
      id: 'list2',
      name: 'Important',
      icon: 'ms-Icon ms-Icon--FavoriteStar iconSize-24',
    },
    {
      id: 'list3',
      name: 'Planned',
      icon: 'ms-Icon ms-Icon--Calendar iconSize-24',
    },
    {
      id: 'list4',
      name: 'Assigned to you',
      icon: 'ms-Icon ms-Icon--Contact iconSize-24',
    },
    {
      id: 'list5',
      name: 'Tasks',
      icon: 'ms-Icon ms-Icon--Home iconSize-24',
    }
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

  createList(listName: string) {
    this.totalListCount += 1;
    this.categories.push({
      id: 'list' + this.totalListCount,
      name: listName,
      icon: 'ms-Icon ms-Icon--BulletedList iconSize-24',
    });
  }

  currentCategory(selectedCategory: string) {
    this.currentListId = selectedCategory;
    this.currentListName = this.categories[
      this.categories.findIndex((category) => category.id == selectedCategory)
    ].name;
    console.log(this.currentListId);
  }

  createTask(newTask: string) {
    this.totalTaskCount += 1;
    this.allTasks.push({
      id: 'task' + this.totalTaskCount,
      name: newTask,
      categoryId: this.currentListId
    });
    
  }
}

interface task {
  id: string;
  name: string;
  categoryId: string;
}