import { Component, OnInit } from '@angular/core';
import { DataModelService } from 'src/app/services/dataSource/data-model.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {

  constructor(public dataModel: DataModelService) {}

  ngOnInit(): void {}

}
