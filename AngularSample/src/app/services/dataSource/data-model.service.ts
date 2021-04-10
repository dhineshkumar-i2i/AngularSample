import { Injectable } from '@angular/core';
import { Category, Task } from '../../model/Model';

@Injectable({
  providedIn: 'root',
})
export class DataModelService {
  public categories: Category[] = [
    {
      id: 'list1',
      name: 'My Day',
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
    },
  ];
  public currentListName: string = 'Tasks';
  public currentListId: string = 'list5';
  public selectedTask: Task | null = null;
  //public selectedTask: Task = {
  //  id: '',
  //  name: '',
  //  categoryId: '',
  //  SubTasks: [],
  //};
  public allTasks: Task[] = [];
  private totalListCount: number = this.categories.length;
  private totalTaskCount: number = 0;
  

  constructor() {}

  /**
   * This method creates a new list and adds to category List.
   *
   * @param listName the name of the New list.
   */
  public createList(listName: string): void {
    this.totalListCount += 1;
    this.categories.push({
      id: 'list' + this.totalListCount,
      name: listName,
      icon: 'ms-Icon ms-Icon--BulletedList iconSize-24',
    });
  }

  /**
   * This method updates the current selected category.
   *
   * @param selectedCategoryId the id of the seleceted category.
   */
  public currentCategory(selectedCategoryId: string): void {
    this.currentListId = selectedCategoryId;
    this.currentListName = this.categories[
      this.categories.findIndex((category) => category.id == selectedCategoryId)
    ].name;
    this.selectedTask = null;
  }

  /**
   * This method creates a new task and adds to task list.
   *
   * @param newTask the name of the new task.
   */
  public createTask(newTask: string): void {
    this.totalTaskCount += 1;
    this.allTasks.push({
      id: 'task' + this.totalTaskCount,
      name: newTask,
      categoryId: this.currentListId,
      SubTasks: [],
    });
  }

  /**
   * This method updates the current selected task.
   *
   * @param selectedTaskId the id of the selected task.
   */
  public currentTask(selectedTaskId: string): void {
    this.selectedTask = this.allTasks[
      this.allTasks.findIndex((task) => task.id == selectedTaskId)
    ];
  }

  /**
   * This method creates a step for a particular task.
   *
   * @param newStep the new step to be created.
   */
  public createStep(newStep: string): void {
    this.allTasks[
      this.allTasks.findIndex(
        (task) => task.id == (this.selectedTask && this.selectedTask.id)
      )
    ].SubTasks.push(newStep);
  }
}