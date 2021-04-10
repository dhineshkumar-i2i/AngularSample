import { Component, OnInit } from '@angular/core';
import { DataModelService } from 'src/app/services/dataSource/data-model.service';

@Component({
  selector: 'app-sub-tasks',
  templateUrl: './sub-tasks.component.html',
  styleUrls: ['./sub-tasks.component.scss'],
})
export class SubTasksComponent implements OnInit {
  newStep: string = '';
  constructor(public dataModel: DataModelService) {}

  ngOnInit(): void {}

  /**
   * This method adds a new step to a particular task. 
   */
  addStep(): void {
    this.dataModel.createStep(this.newStep);
    this.newStep = '';
  }
}
