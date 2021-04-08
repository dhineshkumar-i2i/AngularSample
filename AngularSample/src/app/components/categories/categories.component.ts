import { Component, OnInit } from '@angular/core';
import { DataModelService } from 'src/app/services/data-model.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  newList: string = '';

  constructor(public dataModel: DataModelService) {}

  ngOnInit(): void {}

  /**
   * This method calls the service to create a new list
   */
  addList(): void {
    this.dataModel.createList(this.newList);
    this.newList = '';
  }

  /**
   * This method updates the selected category by the user when
   * the particular category is clicked.
   *
   * @param event holds all the information about the click event.
   */
  selectedCategory(event: any): void {
    this.dataModel.currentCategory(event.target.id);
    this.dataModel.currentTask('');
  }
}
