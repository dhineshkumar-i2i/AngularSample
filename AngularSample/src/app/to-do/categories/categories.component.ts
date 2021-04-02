import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categories: any;
  @Output() newListEvent = new EventEmitter();
  @Output() currentCategory = new EventEmitter();
  public newList = '';
  public aaa= "";

  constructor() {}

  ngOnInit(): void {}

  addList(event: any) {
    if (event.which == '13') {
      console.log(this.newList);
      this.newListEvent.emit(this.newList);
      this.newList = "";
    }
  }

  selectedCategory(event: any){
    console.log(event.target.id);
    this.currentCategory.emit(event.target.id);
  }
}
