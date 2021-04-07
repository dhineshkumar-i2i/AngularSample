import { Component, OnInit } from '@angular/core';
import { DataModelService } from 'src/app/services/data-model.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public newList = '';

  constructor(public dataModel: DataModelService) {}

  ngOnInit(): void {}

  addList() {
    this.dataModel.createList(this.newList);
    console.log(this.newList);
    this.newList = '';
  }

  selectedCategory(event: any) {
    console.log(event.target.id);
    this.dataModel.currentCategory(event.target.id);
    this.dataModel.currentTask('');
  }
}
