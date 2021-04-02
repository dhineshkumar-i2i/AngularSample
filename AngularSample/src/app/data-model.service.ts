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
      tasks: [],
    },
    {
      id: 'list2',
      name: 'Important',
      icon: 'ms-Icon ms-Icon--FavoriteStar iconSize-24',
      tasks: [],
    },
    {
      id: 'list3',
      name: 'Planned',
      icon: 'ms-Icon ms-Icon--Calendar iconSize-24',
      tasks: [],
    },
    {
      id: 'list4',
      name: 'Assigned to you',
      icon: 'ms-Icon ms-Icon--Contact iconSize-24',
      tasks: [],
    },
    {
      id: 'list5',
      name: 'Tasks',
      icon: 'ms-Icon ms-Icon--Home iconSize-24',
      tasks: [],
    },
  ];

  constructor() {}
}
